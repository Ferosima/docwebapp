import React from 'react';
import './style.css';

export default class DocumentsListItem extends React.Component {
  render() {
    const { data, empty } = this.props;
    const { title, created_at } = data;
    return (
      <div className="documentsListItem">
        <div className="document" />
        <div className="infoContainer">
          <p className="title">{title}</p>
          <p className="subtitle">{created_at}</p>
        </div>
      </div>
    );
  }
}
