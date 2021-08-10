import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { DocumentsListItem } from "../../components/DocumentListItem";
import documents from "../../mockData/documents";
import { fetchDocuments } from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import "./style.css";

class DocumentsPage extends React.Component {
  componentDidMount() {
    this.props.fetchDocuments();
  }

  renderDocument(item, index) {
    return (
      <div className="listItem" key={index}>
        <DocumentsListItem data={item} />
      </div>
    );
  }

  render() {
    console.log(this.props.store);
    const { list } = this.props.documents;
    return (
      <div className="documentsPage">
        <h2>Documents</h2>
        <p className="subtitle">You have n documents</p>
        <div className="list">{list.map(this.renderDocument)}</div>
      </div>
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
