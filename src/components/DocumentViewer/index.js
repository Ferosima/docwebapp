import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import FileSaver from "file-saver";
import assetsData from "../../assets/assetsData";
import Button from "../Button";
import {
  Container, Input, Label, Preview, Text, Title, Wrapper, Header, Icon,
} from "./style";

export default function DocumentViewer({ file, onRequestClose, name }) {
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
        <Icon name="arrowBack" size="25px" color="#455A64" onClick={onRequestClose} />
        <Title>{name}.pdf</Title>
        <Icon name="save" size="25px" color="#455A64" onClick={onSaveFile} />
      </Header>
      <Container>
        <Document
          file={URL.createObjectURL(file)}
          className="Document"
          onLoadSuccess={onDocumentLoadSuccess}
          onClick={onRequestClose}
        >
          {[...Array(numPages)].map((e, i) => (
            <>
              <Page
                pageNumber={i + 1}
                className="Page"
                renderMode="svg"
                onClick={handleChildClick}
              />
              <Text>
                Page {i + 1} of {numPages}
              </Text>
            </>
          ))}
        </Document>
      </Container>
    </Wrapper>
  );
}
