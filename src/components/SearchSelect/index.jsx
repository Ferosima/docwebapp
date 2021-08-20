import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import { useSelector, useDispatch } from "react-redux";
import Fuse from "fuse.js";
import { render } from "@testing-library/react";
import { fetchUsers } from "../../store/actions/users";
import {
  Wrapper, Container, Title, Subtitle, Item, Row, Input,
} from "./style";
import Avatar from "../Avatar";
import Button from "../Button";
import Icon from "../Icon";

export default function SearchSelect({
  action, error, getValues, setValue, register,
}) {
  const [selectedList, setSelectedList] = useState([]);
  const { panding, list } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const newlist = list.map((el) => {
    return { value: el.uuid, name: `${el.firstName} ${el.secondName} ${el.email}`, data: el };
  });

  function fuzzySearch(options) {
    const fuse = new Fuse(options, {
      keys: ["name", "groupName", "items.name"],
      threshold: 0.3,
    });

    return (value) => {
      if (!value.length) {
        return options;
      }
      return fuse.search(value);
    };
  }

  const onChange = (data) => {
    setSelectedList(newlist.filter((el) => data?.length && data.includes(el.value)));
    setValue("signerIds", data);
  };

  const renderUser = (props, { data }, { selected }) => {
    const { firstName, secondName, email } = data;
    return (
      <Item onMouseDown={!selected ? props.onMouseDown : null} type="button" value={props.value}>
        <Row>
          <Avatar name={firstName} style={{ marginRight: "10px" }} />
          <Container>
            <Title>{`${firstName} ${secondName}`}</Title>
            <Subtitle>{email}</Subtitle>
          </Container>
        </Row>
        {selected && (
          <button type="button" {...props}>
            <Button
              text="Remove"
              theme="outlineRed"
              style={{ padding: "2px 5px", borderRadius: "7px" }}
            />
          </button>
        )}
      </Item>
    );
  };

  const renderValue = ({ value, ...valueProps }) => {
    return (
      <Input>
        <Icon name="search" color="#afb6c8" />
        <input {...valueProps} placeholder="Search team members" />
      </Input>
    );
  };

  return (
    <Wrapper>
      <Title>Signatures</Title>
      <Subtitle textAlign="center" padding="10px 0">
        Enter the email of the person who must sign this document
      </Subtitle>
      <Container>
        <SelectSearch
          renderValue={renderValue}
          // className="select"
          {...register("signerIds")}
          closeOnSelect={false}
          options={newlist}
          renderOption={renderUser}
          filterOptions={fuzzySearch}
          onChange={onChange}
          value={getValues("signerIds")}
          search
          multiple
          printOptions="on-focus"
          // printOptions="always"
        />
      </Container>
      {selectedList.length ? (
        <SelectSearch
          closeOnSelect={false}
          options={selectedList}
          renderOption={renderUser}
          onChange={onChange}
          value={selectedList}
          multiple
          printOptions="always"
        />
      ) : (
        <Container
          style={{
            height: "20vh",
            padding: "20px 0 10px",
            justifyContent: "center",
            borderRadius: "5px",
            border: "1px solid #ccd3e4",
            margin: "5px 0 0",
          }}
        >
          <Subtitle textAlign="center">You don`t have signatures</Subtitle>
        </Container>
      )}
    </Wrapper>
  );
}
