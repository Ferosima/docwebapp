import React, { useState } from "react";
import moment from "moment";
import { Document, Page } from "react-pdf";
import DocumentViewer from "../DocumentViewer";
import {
  Wrapper,
  Nav,
  Icon,
  Column,
  Container,
  Preview,
  Title,
  Text,
  Subtitle,
  Description,
  Label,
  Button,
  Background,
} from "./style";

export default function DocumentPreview({
  file, data, isOpen, onRequestClose,
}) {
  const [state, setState] = useState({ tab: "filePreview", isViewDoc: false });

  const setViewDoc = (data) => {
    setState({ ...state, isViewDoc: data });
  };

  const setTab = (tab) => () => {
    tab !== state.tab && setState({ tab });
  };

  const Tab = ({ name, icon }) => {
    return (
      <Icon
        name={icon}
        isOutline={state.tab !== name}
        size="18px"
        color={state.tab !== name ? "#455A64" : "#407BFF"}
        onClick={setTab(name)}
      />
    );
  };

  const renderFilePreview = () => {
    const {
      name, description, createdAt, uuid, extiresAt,
    } = data;
    return (
      <Container style={{ padding: "15px 20px" }}>
        <Column>
          <Subtitle>File Preview</Subtitle>
          <Column>
            <Preview>
              <Document file={file} className="Document">
                <Page pageNumber={1} renderMode="svg" width={150} height={212} className="Page" />
              </Document>
            </Preview>
            <Title>{name}</Title>
            {description && <Description>{description}</Description>}
            <Label>Creation Date:</Label>
            <Text>{moment(createdAt).format("D MMMM YYYY, HH:mm")}</Text>
            <Label>Expires At:</Label>
            <Text>{moment(extiresAt).format("D MMMM YYYY, HH:mm")}</Text>
            <Label>Document ID:</Label>
            <Text>{uuid}</Text>
          </Column>
        </Column>
        <Button text="View Document" theme="outline" onClick={() => setViewDoc(true)} />
        {state.isViewDoc && (
          <DocumentViewer file={file} onRequestClose={() => setViewDoc(false)} name={name} />
        )}
      </Container>
    );
  };

  const renderPreview = () => {
    switch (state.tab) {
      case "filePreview":
        return renderFilePreview();
      case "signatures":
        return renderFilePreview();
      default:
        renderFilePreview();
    }
  };

  return (
    <Background isOpen={isOpen}>
      <Wrapper isOpen={isOpen}>
        <Nav>
          <Icon name="arrowCollapse" size="24px" color="#455A64" onClick={onRequestClose} />
          <Column style={{ padding: "10px 0" }}>
            <Tab icon="info" name="filePreview" />
            <Tab icon="pen" name="signatures" />
          </Column>
        </Nav>
        {data && renderPreview()}
      </Wrapper>
    </Background>
  );
}
