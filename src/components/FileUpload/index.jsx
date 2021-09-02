import React from "react";
import { withNamespaces } from "react-i18next";
import { Document, Page } from "react-pdf";
import assetsData from "../../assets/assetsData";
import Button from "../Button";
import { Container, Input, Label, Preview, Text, Title, Wrapper } from "./style";

class FileUploadPage extends React.Component {
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
    const { register, t } = this.props;
    return (
      <Label selectedFile={selectedFile}>
        <Button
          text={
            selectedFile
              ? t("modal.create_doc.fileUpload.buttons.change")
              : t("modal.create_doc.fileUpload.buttons.upload")
          }
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
    const { t } = this.props;
    return (
      <Wrapper>
        <Title>{t("modal.create_doc.fileUpload.title")}</Title>
        <Container style={{ padding: !selectedFile ? "30px 0 20px" : "5px 0 10px", height: "260px" }}>
          {!selectedFile ? (
            <Text>
              {t("modal.create_doc.fileUpload.first_part")}
              <br />
              {t("modal.create_doc.fileUpload.second_part")}
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
export default withNamespaces()(FileUploadPage);
