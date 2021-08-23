import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { DocumentCard as Card } from "../../components/Card";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { Empty, Loading, Success } from "../../components/Plugs";
import { fetchDocuments, createDocument, documentsClearError } from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import { Container, Grid, Wrapper } from "./style";
import FileUploader from "../../components/FileUpload";
import AddDocForm from "../../components/AddDocForm";
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

  openModal = () => {
    this.setModalVisible(true);
    this.props.documentsClearError();
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
        onClick={this.openModal}
      />
    );

  render() {
    const { list, panding, isSuccess } = this.props.documents;
    const { modalVisible } = this.state;
    return (
      <Wrapper>
        <Modal
          title={!isSuccess && "Create Document"}
          modalVisible={modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          theme={!isSuccess && "allScreen"}
        >
          {isSuccess ? (
            <Success text="Create document success" onClick={() => this.setModalVisible(false)} />
          ) : (
            <AddDocForm action={this.props.createDocument} />
          )}
        </Modal>
        <Header title="Documents" buttons={[{ name: "add", action: this.openModal }]} />
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
  createDocument,
  documentsClearError,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(DocumentsPage);
