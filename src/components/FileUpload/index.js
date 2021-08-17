import React, { useState } from "react";
import {
  Input, Label, Text, Wrapper, Title, Container,
} from "./style";
import Button from "../Button";
import assetsData from "../../assets/assetsData";

export default function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("UPOLAD", event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {};

  return (
    <Wrapper>
      <Title>Document</Title>
      <Container style={{ padding: "30px 0 20px" }}>
        {!isFilePicked ? (
          <Text>
            You don’t have document
            <br /> You can upload only .pdf or .doc file
          </Text>
        ) : (
          <div>
            <p>Filename: {selectedFile?.name}</p>
            <p>Filetype: {selectedFile?.type}</p>
            <p>Size in bytes: {selectedFile?.size}</p>
            <p>lastModifiedDate: {selectedFile?.lastModifiedDate.toLocaleDateString()}</p>
          </div>
        )}
        <Label>
          <Button
            text="Upload"
            image={assetsData.images.UploadBlue}
            theme="outline"
            style={{ padding: "3px 10px", borderRadius: "15px" }}
          />
          <Input
            type="file"
            name="file"
            onChange={changeHandler}
            accept="application/pdf,application/msword,.doc,.docx"
            // TODO add check file type
          />
        </Label>
      </Container>
      {/* {isFilePicked ? (

      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
      </div> */}
    </Wrapper>
  );
}
