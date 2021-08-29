import React, { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Document, Page } from "react-pdf";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import DocumentViewer from "../DocumentViewer";
import { FileInfoTab, SignaturesTab } from "../PreviewTabs";
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
  Item,
  Avatar,
  Row,
} from "./style";

export default function DocumentPreview({
  file, data, isOpen, onRequestClose,
}) {
  const [state, setState] = useState({ tab: "filePreview" });

  const setTab = (tab) => () => {
    tab !== state.tab && setState({ tab });
  };

  const Tab = ({ name, icon }) => {
    return (
      <Icon
        name={icon}
        isOutline={state.tab !== name}
        size="18px"
        color={state.tab !== name ? "#455A64" : "#477bff"}
        onClick={setTab(name)}
      />
    );
  };

  const renderPreview = () => {
    switch (state.tab) {
      case "filePreview":
        return <FileInfoTab data={data} file={file} />;
      case "signatures":
        return <SignaturesTab uuid={data.uuid} />;
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
