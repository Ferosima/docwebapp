import React from "react";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { PeopleCard as Card } from "../../components/Card";
import Header from "../../components/Header";
import InviteForm from "../../components/InviteForm";
import Modal from "../../components/Modal";
import { Empty, Loading, Success } from "../../components/Plugs";
import { fetchUsers, inviteSuccessClear, inviteUser } from "../../store/actions/users";
import { getUserState } from "../../store/selectors/user";
import { getUsersState } from "../../store/selectors/users";
import { Container, Grid, Wrapper } from "./style";
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
    const { users, inviteUser, user, t } = this.props;
    const { panding, list, inviteSuccess, error } = users;
    const { modalVisible } = this.state;
    return (
      <Wrapper>
        <Modal
          title={!inviteSuccess && t(`modal.invite.title`)}
          modalVisible={modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          type={inviteSuccess && "success"}
        >
          {inviteSuccess ? (
            <Success text={t(`modal.success.invite`)} onClick={() => this.setModalVisible(false)} />
          ) : (
            <InviteForm action={inviteUser} panding={panding} error={error} />
          )}
        </Modal>
        <Header title={t(`sidebar.members`)} buttons={[{ name: "add", action: this.openModal }]} />
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

export default withNamespaces()(compose(withRouter, withConnect)(PeoplePage));
