import React from 'react';
import DocumentsListItem from '../../components/DocumentListItem';
import documents from '../../mockData/documents';
import './style.css';

export default class DocumentsPage extends React.Component {
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
            console.log('CLICK CREATE DOC');
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
