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

  changeHandler = async (event) => {
    if (event.target.files.length !== 0) {
      const file = await URL.createObjectURL(event.target.files[0]);
      this.props.setValue("file", event.target.files);
      this.setState({ selectedFile: file, fileName: event.target.files[0].name });
    }
  };

  renderUploadButton = () => {
    const { selectedFile } = this.state;
    const { register } = this.props;
    return (
      <Label selectedFile={selectedFile}>
        <Button
          text={selectedFile ? "Change" : "Upload"}
          image={selectedFile ? assetsData.images.ChangeBlue : assetsData.images.UploadBlue}
          type="outline"
          style={{ padding: "3px 10px", borderRadius: "15px" }}
        />
        <Input
          {...register("file", { required: true })}
          type="file"
          name="file"
          onChange={this.changeHandler}
          accept="application/pdf"
        />
      </Label>
    );
  };

  render() {
    const { selectedFile, fileName } = this.state;
    return (
      <Wrapper>
        <Title>Document</Title>
        <Container
          style={{ padding: !selectedFile ? "30px 0 20px" : "5px 0 10px", height: "260px" }}
        >
          {!selectedFile ? (
            <Text>
              You don’t have document
              <br /> You can upload only .pdf or .doc file
            </Text>
          ) : (
            <Preview>
              <Text>{fileName} </Text>
              <Document file={selectedFile} className="Document">
                <Page pageNumber={1} renderMode="svg" width={150} height={212} className="Page" />
              </Document>
            </Preview>
          )}
          {this.renderUploadButton()}
        </Container>
      </Wrapper>
    );
  }
}
