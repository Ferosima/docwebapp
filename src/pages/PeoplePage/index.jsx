import React from "react";
import { Wrapper, Container, Grid } from "./style";
import Header from "../../components/Header";
import { PeopleCard as Card } from "../../components/Card";
import { people as list } from "../../mockData";
import EmptyPlug from "../../components/EmptyPlug";
import LoadingPlug from "../../components/LoadingPlug";
import assetsData from "../../assets/assetsData";
export default class PeoplePage extends React.Component {
  renderCard(data, index) {
    return <Card firstName={data.firstName} secondName={data.secondName} key={index} />;
  }

  renderContent = (list) =>
    list.length ? (
      <Container>
        <Grid>{list.map(this.renderCard)}</Grid>
      </Container>
    ) : (
      <EmptyPlug
        image={assetsData.images.invite}
        text="You don't have a members"
        buttonText="Invite People"
        // onClick={() => console.log("HI")}
      />
    );

  render() {
    const { panding = false } = this.props;
    return (
      <Wrapper>
        <Header title="People" buttons={[{ name: "add", action: console.log("add") }]} />
        {!panding ? this.renderContent(list) : <LoadingPlug panding={panding} />}
      </Wrapper>
    );
  }
}
