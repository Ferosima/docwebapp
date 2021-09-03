import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import FileSaver from "file-saver";
import { withNamespaces } from "react-i18next";
import assetsData from "../../assets/assetsData";
import Button from "../Button";
import {
  Container, Input, Label, Preview, Text, Title, Wrapper, Header, Icon,
} from "./style";

function DocumentViewer({
  file, onRequestClose, name, t,
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const onSaveFile = () => {
    FileSaver.saveAs(file, `${name}.pdf`);
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Wrapper>
      <Header>
        <Icon name="arrowBack" size="25px" onClick={onRequestClose} />
        <Title>{name}.pdf</Title>
        <Icon name="save" size="25px" onClick={onSaveFile} />
      </Header>
      <Container>
        <Document file={file} className="Document" onLoadSuccess={onDocumentLoadSuccess} onClick={onRequestClose}>
          {[...Array(numPages)].map((e, i) => (
            <>
              <Page pageNumber={i + 1} className="Page" renderMode="svg" onClick={handleChildClick} />
              <Text>
                {t("docViewer.page")} {i + 1} {t("docViewer.of")} {numPages}
              </Text>
            </>
          ))}
        </Document>
      </Container>
    </Wrapper>
  );
}
export default withNamespaces()(DocumentViewer);
