import React from "react";
import { Document, Page } from "react-pdf";
import assetsData from "../../assets/assetsData";
import Button from "../Button";
import { Container, Input, Label, Preview, Text, Title, Wrapper } from "./style";

export default class FileUploadPage extends React.Component {
  state = {
    selectedFile: null,
    fileName: null,
  };

  toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  changeHandler = async (event) => {
    const file = await URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files[0]);
    this.setState({ selectedFile: file, fileName: event.target.files[0].name });
  };

  renderUploadButton = () => {
    const { selectedFile } = this.state;
    return (
      <Label>
        <Button
          text={selectedFile ? "Change" : "Upload"}
          image={selectedFile ? assetsData.images.ChangeBlue : assetsData.images.UploadBlue}
          theme="outline"
          style={{ padding: "3px 10px", borderRadius: "15px" }}
        />
        <Input
          type="file"
          name="file"
          onChange={this.changeHandler}
          accept="application/pdf"
          // TODO add check file type
        />
      </Label>
    );
  };

  render() {
    const { selectedFile, fileName } = this.state;
    console.log(selectedFile);
    return (
      <Wrapper>
        <Title>Document</Title>
        <Container style={{ padding: !selectedFile ? "30px 0 20px" : "5px 0 10px" }}>
          {!selectedFile ? (
            <Text>
              You don’t have document
              <br /> You can upload only .pdf or .doc file
            </Text>
          ) : (
            <Preview>
              <Text>{fileName} </Text>
              <Document file={selectedFile} className="Document">
                <Page pageNumber={1} renderMode="svg" width="210" height="297" />
              </Document>
            </Preview>
          )}
          {this.renderUploadButton()}
        </Container>
      </Wrapper>
    );
  }
}
