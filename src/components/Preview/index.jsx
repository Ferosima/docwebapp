import React, { useState } from "react";
import { FileInfoTab, SignaturesTab } from "../PreviewTabs";
import {
  Wrapper, Nav, Icon, Column, Background,
} from "./style";

export default function DocumentPreview({
  file, data, isOpen, onRequestClose,
}) {
  const [state, setState] = useState({ tab: "filePreview" });

  const setTab = (tab) => () => {
    tab !== state.tab && setState({ tab });
  };
  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  const Tab = ({ name, icon }) => {
    return (
      <Icon
        name={icon}
        isOutline={state.tab !== name}
        size="18px"
        isMatch={state.tab === name}
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
    <Background isOpen={isOpen} onClick={onRequestClose}>
      <Wrapper isOpen={isOpen} onClick={handleChildClick}>
        <Nav>
          <Icon name="arrowCollapse" size="24px" onClick={onRequestClose} />
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
