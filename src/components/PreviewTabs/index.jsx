import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignatures, processDocument } from "../../store/actions/documents";
import DocumentViewer from "../DocumentViewer";
import {
  Avatar,
  Button,
  Column,
  Container,
  Description,
  Item,
  Label,
  Preview,
  Row,
  Subtitle,
  Text,
  Title,
} from "./style";

export const FileInfoTab = ({ data, file }) => {
  const [state, setState] = useState({ isViewDoc: false });
  const {
    name, description, createdAt, uuid, extiresAt, creator,
  } = data;

  const openDocViewer = () => {
    setState({ isViewDoc: true });
  };
  const closeDocViewer = () => {
    setState({ isViewDoc: false });
  };

  return (
    <Container style={{ padding: "15px 20px" }}>
      <Column>
        <Subtitle>File Preview</Subtitle>
        <Preview>
          <Document file={file} className="Document">
            <Page pageNumber={1} renderMode="canvas" width={150} height={212} className="Page" />
          </Document>
        </Preview>
        <Title withoutBottomPadding={description === "null"}>{name}</Title>
        {description !== "null" && <Description>{description}</Description>}
        <Label>Owner of the document:</Label>
        <User data={creator} />
        <Label>Creation Date:</Label>
        <Text>{moment(createdAt).format("D MMMM YYYY, HH:mm")}</Text>
        <Label>Expires At:</Label>
        <Text>{moment(extiresAt).format("D MMMM YYYY, HH:mm")}</Text>
        <Label>Document ID:</Label>
        <Text>{uuid}</Text>
      </Column>
      <Button text="View Document" type="outline" onClick={openDocViewer} />
      {state.isViewDoc && <DocumentViewer file={file} onRequestClose={closeDocViewer} name={name} />}
    </Container>
  );
};

export const SignaturesTab = ({ uuid }) => {
  const signatures = useSelector((state) => state.documents.signatures);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchSignatures(uuid)), [uuid]);
  const status = { signed: "primary", rejected: "secondary" };

  const renderUser = ({ signer, completedStatus }, index) => {
    return (
      <TimelineItem key={index}>
        <TimelineSeparator>
          <TimelineDot color={status[completedStatus] ?? "grey"} />
          {index + 1 !== signatures[uuid]?.length && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <User data={signer} />
        </TimelineContent>
      </TimelineItem>
    );
  };
  const userSignature = signatures[uuid]?.find((el) => el.signer.uuid === user.uuid);
  return (
    <Container style={{ padding: "15px 20px" }}>
      <Column>
        <Subtitle>Signatures</Subtitle>
        <Container>
          <Timeline>{signatures[uuid] && signatures[uuid].map(renderUser)}</Timeline>
        </Container>
        <Column />
      </Column>
      {signatures[uuid] && userSignature?.completedStatus === null ? (
        <Row>
          <Button
            text="Reject"
            type="outlineRed"
            onClick={() => dispatch(processDocument({ uuid, status: "rejected" }))}
          />
          <Button text="Sign" type="outline" onClick={() => dispatch(processDocument({ uuid, status: "signed" }))} />
        </Row>
      ) : (
        signatures[uuid] && userSignature && <Label>Document are {userSignature?.completedStatus}</Label>
      )}
    </Container>
  );
};

const User = ({ data }) => {
  const user = useSelector((state) => state.user);
  const {
    firstName, secondName, email, uuid, avatarColor,
  } = data;
  return (
    <Item>
      <Avatar name={user.uuid === uuid ? "Y" : firstName} color={avatarColor} style={{ marginRight: "10px" }} />
      <Column>
        <Title bold={user.uuid === uuid}>{user.uuid === uuid ? "You" : `${firstName} ${secondName}`}</Title>
        <Subtitle>{email}</Subtitle>
      </Column>
    </Item>
  );
};
