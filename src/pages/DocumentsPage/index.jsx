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
  fetchDocuments,
  createDocument,
  documentsClearError,
  fetchDocumentFile,
} from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import { Container, Grid, Wrapper } from "./style";
import FileUploader from "../../components/FileUpload";
import AddDocForm from "../../components/AddDocForm";
import Preview from "../../components/Preview";
class DocumentsPage extends React.Component {
  state = {
    modalVisible: false,
    selectedFile: null,
  };

  componentDidMount() {
    this.props.fetchDocuments();
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

  renderCard = (data, index) => {
    const { files } = this.props.documents;
    return (
      <Card
        data={data}
        key={index}
        file={files[data.uuid]}
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
    const { list, panding, isSuccess, files } = this.props.documents;
    const { modalVisible, selectedFile } = this.state;
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
        {/* {files[selectedFile?.uuid] && (
          <DocumentViewer
            file={files[selectedFile?.uuid]}
            onRequestClose={this.clearSelectedFile}
            name={selectedFile?.name}
          />
        )} */}
        <Container>
          <Header title="Documents" buttons={[{ name: "add", action: this.openModal }]} />
          {!panding ? this.renderContent(list) : <Loading panding={panding} />}
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
  fetchDocuments,
  createDocument,
  documentsClearError,
  fetchDocumentFile,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(DocumentsPage);
