import React from "react";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import AddDocForm from "../../components/AddDocForm";
import { DocumentCard as Card } from "../../components/Card";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { Empty, Loading, Success } from "../../components/Plugs";
import Preview from "../../components/Preview";
import {
  createDocument,
  documentsClearError,
  fetchCreatedDocuments,
  fetchDocumentFile,
  fetchSigningDocuments,
} from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import { Container, Grid, Toggle, Wrapper } from "./style";

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

  onClickToggle = (name, action) => {
    this.setState({ toggle: name });
    action();
  };

  renderCard = (data, index) => {
    const { files } = this.props.documents;
    return <Card data={data} key={index} file={files[data?.uuid]} onClick={() => this.setSelectedFile(data)} />;
  };

  renderContent = (list) => {
    const { t } = this.props;
    return list.length ? (
      <Container>
        <Grid>{list.map(this.renderCard)}</Grid>
      </Container>
    ) : (
      <Empty
        image={assetsData.images.addDoc}
        text={t(`plug.empty.documents.${this.state.toggle}`)}
        buttonText={t(`plug.empty.documents.button`)}
        onClick={this.openModal}
      />
    );
  };

  renderForm = () => {
    const { t } = this.props;
    return this.props.documents.isSuccess ? (
      <Success text={t(`modal.success.create_doc`)} onClick={() => this.setModalVisible(false)} />
    ) : (
      <AddDocForm action={this.props.createDocument} />
    );
  };

  render() {
    const { documents, fetchCreatedDocuments, fetchSigningDocuments, t } = this.props;
    const { created_documents, signing_documents, panding, isSuccess, files } = documents;
    const { modalVisible, selectedFile, toggle } = this.state;
    const tabs = { Created: created_documents, Signing: signing_documents };
    return (
      <Wrapper>
        <Modal
          title={!isSuccess && t(`modal.create_doc.title`)}
          modalVisible={modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          type={isSuccess ? "success" : "allScreen"}
        >
          {this.renderForm()}
        </Modal>
        <Container style={{ overflow: "hidden" }}>
          <Header title={t(`sidebar.documents`)} buttons={[{ name: "add", action: this.openModal }]} />
          <Toggle
            buttons={[
              { text: t("toggle.created"), action: fetchCreatedDocuments, name: "Created" },
              { text: t("toggle.signing"), action: fetchSigningDocuments, name: "Signing" },
            ]}
            active={toggle}
            onClick={this.onClickToggle}
          />
          {!panding ? this.renderContent(tabs[toggle] ?? created_documents) : <Loading panding={panding} />}
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

export default withNamespaces()(compose(withRouter, withConnect)(DocumentsPage));
