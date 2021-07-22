import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import DocumentsListItem from "../../components/DocumentListItem";
import documents from "../../mockData/documents";
import { fetchDocuments } from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import "./style.css";

class DocumentsPage extends React.Component {
  componentDidMount() {
    this.props.fetchDocuments();
  }

  renderDocument(doc) {
    return (
      <div className="listItem">
        <DocumentsListItem data={doc} />
      </div>
    );
  }

  renderCreateDocumentButton() {
    return (
      <div className="listItem">
        <div
          className="createDocumentButton"
          onClick={() => {
            console.log("CLICK CREATE DOC");
          }}
        >
          <h2>+</h2>
          <p>Create Document</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="documentsPage">
        <h2>Documents</h2>
        <p className="subtitle">You have n documents</p>
        <div className="list">
          {this.renderCreateDocumentButton()}
          {documents.map((doc) => this.renderDocument(doc))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  documents: getDocumentsState(state),
});
const mapDispatchToProps = {
  fetchDocuments,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(DocumentsPage);
