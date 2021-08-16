import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { DocumentCard as Card } from "../../components/Card";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { Empty, Loading } from "../../components/Plugs";
import { fetchDocuments } from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import { Container, Grid, Wrapper } from "./style";
class DocumentsPage extends React.Component {
  state = {
    modalVisible: false,
  };

  componentDidMount() {
    this.props.fetchDocuments();
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  renderCard(data, index) {
    return <Card data={data} key={index} />;
  }

  renderContent = (list) =>
    list.length ? (
      <Container>
        <Grid>{list.map(this.renderCard)}</Grid>
      </Container>
    ) : (
      <Empty
        image={assetsData.images.addDoc}
        text="You don't have a documents"
        buttonText="Add Document"
        onClick={() => this.setModalVisible(true)}
      />
    );

  render() {
    const { list, panding } = this.props.documents;
    const { modalVisible } = this.state;
    return (
      <Wrapper>
        <Modal modalVisible={modalVisible} onRequestClose={() => this.setModalVisible(false)}>
          <p>Text2sssssssssssssssssssssssssss</p>
        </Modal>
        <Header title="Documents" buttons={[{ name: "add", action: console.log("add") }]} />
        {!panding ? this.renderContent(list) : <Loading panding={panding} />}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  documents: getDocumentsState(state),
  store: state,
});
const mapDispatchToProps = {
  fetchDocuments,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(DocumentsPage);
