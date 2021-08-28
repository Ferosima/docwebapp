import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { DocumentCard as Card } from "../../components/Card";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import DocumentViewer from "../../components/DocumentViewer";
import { Empty, Loading, Success } from "../../components/Plugs";
import {
  fetchCreatedDocuments,
  fetchSigningDocuments,
  createDocument,
  documentsClearError,
  fetchDocumentFile,
} from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import { Container, Grid, Wrapper, Toggle } from "./style";
import FileUploader from "../../components/FileUpload";
import AddDocForm from "../../components/AddDocForm";
import Preview from "../../components/Preview";
// import { Toggle } from "../../components/Toggle";
import { DOCS_FETCH_SIGNING_DOCUMENTS_FAILED } from "../../store/types/documents";

class DocumentsPage extends React.Component {
  state = {
    modalVisible: false,
    selectedFile: null,
    toggle: "Created",
  };

  componentDidMount() {
    this.props.fetchCreatedDocuments();
  }

  openModal = () => {
    this.setModalVisible(true);
    this.props.documentsClearError();
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  setSelectedFile = (data) => {
    this.setState({ selectedFile: data });
    this.props.fetchDocumentFile(data.uuid);
  };

  clearSelectedFile = () => {
    this.setState({ selectedFile: null });
  };

  onClickToggle = (text, action) => {
    this.setState({ toggle: text });
    action();
  };

  renderCard = (data, index) => {
    const { files } = this.props.documents;
    return (
      <Card
        data={data}
        key={index}
        file={files[data?.uuid]}
        onClick={() => this.setSelectedFile(data)}
      />
    );
  };

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

  renderForm = () =>
    this.props.documents.isSuccess ? (
      <Success text="Create document success" onClick={() => this.setModalVisible(false)} />
    ) : (
      <AddDocForm action={this.props.createDocument} />
    );

  render() {
    const { documents, fetchCreatedDocuments, fetchSigningDocuments } = this.props;
    const { created_documents, signing_documents, panding, isSuccess, files } = documents;
    const { modalVisible, selectedFile, toggle } = this.state;
    const tabs = { Created: created_documents, Signing: signing_documents };
    return (
      <Wrapper>
        <Modal
          title={!isSuccess && "Create Document"}
          modalVisible={modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          theme={!isSuccess && "allScreen"}
        >
          {this.renderForm()}
        </Modal>
        <Container style={{ overflow: "hidden" }}>
          <Header title="Documents" buttons={[{ name: "add", action: this.openModal }]} />
          <Toggle
            buttons={[
              { text: "Created", action: fetchCreatedDocuments },
              { text: "Signing", action: fetchSigningDocuments },
            ]}
            active={toggle}
            onClick={this.onClickToggle}
          />
          {!panding ? (
            this.renderContent(tabs[toggle] ?? created_documents)
          ) : (
            <Loading panding={panding} />
          )}
        </Container>
        {
          <Preview
            isOpen={selectedFile}
            data={selectedFile}
            file={files[selectedFile?.uuid]}
            onRequestClose={this.clearSelectedFile}
          />
        }
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  documents: getDocumentsState(state),
  store: state,
});
const mapDispatchToProps = {
  fetchCreatedDocuments,
  fetchSigningDocuments,
  createDocument,
  documentsClearError,
  fetchDocumentFile,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(DocumentsPage);
