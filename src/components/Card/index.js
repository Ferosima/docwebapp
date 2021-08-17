import moment from "moment";
import React from "react";
import Avatar from "../Avatar";
import { Container, Document, Preview, Status, Subtitle, Title, Wrapper } from "./style";

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
    const { data, style } = this.props;
    const { name, createdAt } = data;
    return (
      <Wrapper style={style}>
        <Status>ready</Status>
        <Preview>
          <Document />
        </Preview>
        <Container theme={theme.document}>
          <Title>{name}</Title>
          <Subtitle>{this.getDate(createdAt)}</Subtitle>
        </Container>
      </Wrapper>
    );
  }
}

export function PeopleCard(props) {
  const { data, style } = props;
  const { firstName, secondName, userWorkspace } = data;
  return (
    <Wrapper style={style}>
      <Container>
        <Avatar name={firstName} size="5em" textSize="45px" style={{ margin: "25px 0" }} />
        <Title>{`${firstName} ${secondName}`}</Title>
        <Subtitle>{userWorkspace.accessLevel}</Subtitle>
      </Container>
    </Wrapper>
  );
}
