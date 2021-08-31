import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import moment from "moment";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import assetsData from "../../assets/assetsData";
import { deleteDocument } from "../../store/actions/documents";
import Avatar from "../Avatar";
import {
  Container, DocumentEmpty, Icon, MenuItem, Preview, Row, Status, Subtitle, Title, Wrapper,
} from "./style";

const theme = {
  document: {
    alignItems: "flex-start",
  },
  people: {
    alignItems: "center",
  },
};
export function DocumentCard({
  data, style, file, onClick,
}) {
  const {
    uuid, name, createdAt, isReady, creator,
  } = data;
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getDate = (date) => moment(date).format("D.MM.YYYY");

  const handleClick = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };
  const onClickDelete = (e) => {
    handleClose(e);
    dispatch(deleteDocument(uuid));
  };
  return (
    <Wrapper
      style={style}
      onClick={() => {
        onClick(file);
      }}
    >
      <Status isReady={isReady}>{isReady ? "Ready" : "In process"}</Status>
      <Preview>
        <DocumentEmpty>
          <img src={assetsData.images.pdf} alt="pdf" />
        </DocumentEmpty>
      </Preview>
      <Container theme={theme.document}>
        <Row>
          <Title>{name}</Title>
          <Icon name="dots" size="20px" color="#455A64" onClick={handleClick} />
        </Row>
        <Subtitle>{getDate(createdAt)}</Subtitle>
      </Container>

      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {creator.uuid === user.uuid ? (
          <MenuItem onClick={onClickDelete}>
            <Icon name="delete" size="20px" color="#DF5753" />
            <Title>Delete</Title>
          </MenuItem>
        ) : (
          <Subtitle style={{ padding: "10px" }}>No actions</Subtitle>
        )}
      </Menu>
    </Wrapper>
  );
}

export function PeopleCard(props) {
  const { data, style, isChosen } = props;
  const {
    firstName, secondName, userWorkspace, avatarColor,
  } = data;
  return (
    <Wrapper style={style}>
      <Container>
        <Avatar name={firstName} color={avatarColor} size="5em" textSize="45px" style={{ margin: "25px 0" }} />
        <Title isChosen={isChosen}>{`${firstName} ${secondName}`}</Title>
        <Subtitle>{userWorkspace.accessLevel}</Subtitle>
      </Container>
    </Wrapper>
  );
}
