import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { PeopleCard as Card } from "../../components/Card";
import Header from "../../components/Header";
import InviteForm from "../../components/InviteForm";
import Modal from "../../components/Modal";
import { Empty, Loading, Success } from "../../components/Plugs";
import { fetchUsers, inviteUser, inviteSuccessClear } from "../../store/actions/users";
import { getUsersState } from "../../store/selectors/users";
import { getUserState } from "../../store/selectors/user";
import { Container, Grid, Wrapper } from "./style";
import { fetchOrganizations } from "../../store/actions/organizations";
class PeoplePage extends React.Component {
  state = {
    modalVisible: false,
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  openModal = () => {
    this.setModalVisible(true);
    this.props.inviteSuccessClear();
  };

  renderCard = (data, index) => {
    const { user } = this.props;
    return <Card data={data} key={index} isChosen={data.uuid === user.uuid} />;
  };

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
        onClick={this.openModal}
      />
    );

  render() {
    const { users, inviteUser, user } = this.props;
    const { panding, list, inviteSuccess, error } = users;
    const { modalVisible } = this.state;
    return (
      <Wrapper>
        <Modal
          title={!inviteSuccess && "Invite People to organization"}
          modalVisible={modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          theme={inviteSuccess && "success"}
        >
          {inviteSuccess ? (
            <Success text="Invite send success" onClick={() => this.setModalVisible(false)} />
          ) : (
            <InviteForm action={inviteUser} panding={panding} error={error} />
          )}
        </Modal>
        <Header title="Members" buttons={[{ name: "add", action: this.openModal }]} />
        {!panding || list.length ? this.renderContent(list) : <Loading panding={panding} />}
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  users: getUsersState(state),
  user: getUserState(state),
});
const mapDispatchToProps = {
  fetchUsers,
  inviteUser,
  inviteSuccessClear,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(PeoplePage);
