import React from "react";
import { Wrapper, Container, Grid } from "./style";
import Header from "../../components/Header";
import { PeopleCard as Card } from "../../components/Card";
import { people as list } from "../../mockData";
import assetsData from "../../assets/assetsData";
import { Empty, Loading } from "../../components/Plugs";
import Modal from "../../components/Modal";
import InviteForm from "../../components/InviteForm";
export default class PeoplePage extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  renderCard(data, index) {
    return <Card firstName={data.firstName} secondName={data.secondName} key={index} />;
  }

  renderContent = (list) =>
    list.length ? (
      <Container>
        <Grid>{list.map(this.renderCard)}</Grid>
      </Container>
    ) : (
      <Empty
        image={assetsData.images.invite}
        text="You don't have a members"
        buttonText="Invite People"
        onClick={() => this.setModalVisible(true)}
      />
    );

  render() {
    const { panding = false } = this.props;
    const { modalVisible } = this.state;
    return (
      <Wrapper>
        <Modal
          title="Invite People to organization"
          modalVisible={modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <InviteForm action={() => console.log("INVITE")} />
        </Modal>
        <Header title="People" buttons={[{ name: "add", action: () => console.log("add") }]} />
        {!panding ? this.renderContent(list) : <Loading panding={panding} />}
      </Wrapper>
    );
  }
}
