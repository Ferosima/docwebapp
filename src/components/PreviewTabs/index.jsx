import Timeline from "@material-ui/lab/Timeline";
import { withNamespaces } from "react-i18next";
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

export const FileInfo = ({ data, file, t }) => {
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
        <Subtitle>{t("preview.doc.title")}</Subtitle>
        <Preview>
          <Document file={file} className="Document">
            <Page pageNumber={1} renderMode="canvas" width={150} height={212} className="Page" />
          </Document>
        </Preview>
        <Title withoutBottomPadding={description === "null"}>{name}</Title>
        {description !== "null" && <Description>{description}</Description>}
        <Label>{t("preview.doc.owner")}</Label>
        <User data={creator} />
        <Label>{t("preview.doc.creation")}</Label>
        <Text>{moment(createdAt).format("D MMMM YYYY, HH:mm")}</Text>
        <Label>{t("preview.doc.expiries")}</Label>
        <Text>{moment(extiresAt).format("D MMMM YYYY, HH:mm")}</Text>
        <Label>{t("preview.doc.id")}</Label>
        <Text>{uuid}</Text>
      </Column>
      <Button text={t("preview.doc.button")} type="outline" onClick={openDocViewer} />
      {state.isViewDoc && <DocumentViewer file={file} onRequestClose={closeDocViewer} name={name} />}
    </Container>
  );
};
export const FileInfoTab = withNamespaces()(FileInfo);

const Signatures = ({ uuid, t }) => {
  const signatures = useSelector((state) => state.documents.signatures);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchSignatures(uuid)), [uuid]);
  const status = { signed: "primary", rejected: "secondary" };

  const renderUser = ({ signer, completedStatus }, index) => {
    return (
      <TimelineItem key={index} style={{ alignItems: signatures[uuid]?.length === 1 && "center" }}>
        <TimelineSeparator>
          <TimelineDot color={status[completedStatus] ?? "grey"} />
          {index + 1 !== signatures[uuid]?.length && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <User data={signer} isSign />
        </TimelineContent>
      </TimelineItem>
    );
  };
  const userSignature = signatures[uuid]?.find((el) => el.signer.uuid === user.uuid);
  return (
    <Container style={{ padding: "15px 20px" }}>
      <Column>
        <Subtitle>{t("preview.signatures.title")}</Subtitle>
        <Container>
          <Timeline>{signatures[uuid] && signatures[uuid].map(renderUser)}</Timeline>
        </Container>
        <Column />
      </Column>
      {signatures[uuid] && userSignature?.completedStatus === null ? (
        <Row>
          <Button
            text={t("preview.signatures.buttons.reject")}
            type="outlineRed"
            onClick={() => dispatch(processDocument({ uuid, status: "rejected" }))}
          />
          <Button
            text={t("preview.signatures.buttons.sign")}
            type="outline"
            onClick={() => dispatch(processDocument({ uuid, status: "signed" }))}
          />
        </Row>
      ) : (
        signatures[uuid] && userSignature && <Label>{t(`preview.signatures.${userSignature?.completedStatus}`)}</Label>
      )}
    </Container>
  );
};

export const SignaturesTab = withNamespaces()(Signatures);

const UserCustom = ({ data, isSign, t }) => {
  const user = useSelector((state) => state.user);
  const {
    firstName, secondName, email, uuid, avatarColor,
  } = data;
  return (
    <Item>
      <Avatar name={user.uuid === uuid ? t("user.y") : firstName} color={avatarColor} style={{ marginRight: "10px" }} />
      <Column>
        <Title bold={user.uuid === uuid}>
          {user.uuid === uuid ? t(`user.${isSign ? "your" : "you"}`) : `${firstName} ${secondName}`}
        </Title>
        <Subtitle>{email}</Subtitle>
      </Column>
    </Item>
  );
};
const User = withNamespaces()(UserCustom);
