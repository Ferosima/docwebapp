import moment from "moment";
import React from "react";
import { Document, Page } from "react-pdf";
import Avatar from "../Avatar";
import { Container, DocumentEmpty, Preview, Status, Subtitle, Title, Wrapper } from "./style";
import assetsData from "../../assets/assetsData";

const theme = {
  document: {
    alignItems: "flex-start",
  },
  people: {
    alignItems: "center",
  },
};
export class DocumentCard extends React.Component {
  getDate = (date) => moment(date).format("D.MM.YYYY");

  render() {
    const { data, style, file, onClick } = this.props;
    const { name, createdAt } = data;
    return (
      <Wrapper
        style={style}
        onClick={() => {
          onClick(file);
        }}
      >
        <Status>ready</Status>
        {/* {!file ? ( */}
        <Preview>
          <DocumentEmpty>
            <img src={assetsData.images.pdf} alt="pdf" />
          </DocumentEmpty>
        </Preview>
        {/* ) : (
          <Preview>
            <Document file={URL.createObjectURL(file)} className="Document">
              <Page pageNumber={1} width={141} height={190} className="Page" />
            </Document>
          </Preview>
        )} */}
        <Container theme={theme.document}>
          <Title>{name}</Title>
          <Subtitle>{this.getDate(createdAt)}</Subtitle>
        </Container>
      </Wrapper>
    );
  }
}

export function PeopleCard(props) {
  const { data, style, isChosen } = props;
  const { firstName, secondName, userWorkspace } = data;
  return (
    <Wrapper style={style}>
      <Container>
        <Avatar name={firstName} size="5em" textSize="45px" style={{ margin: "25px 0" }} />
        <Title isChosen={isChosen}>{`${firstName} ${secondName}`}</Title>
        <Subtitle>{userWorkspace.accessLevel}</Subtitle>
      </Container>
    </Wrapper>
  );
}
