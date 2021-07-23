import moment from "moment";
import React from "react";
import "./style.css";

export function DocumentsListItem(props) {
  const parseDate = (date) => moment(date).format("D.MM.YYYY");

  const { name, created_at } = props.data;
  return (
    <div className="documentsListItem">
      <div className="document" />
      <div className="infoContainer">
        <p className="title">{name}</p>
        <p className="subtitle">{parseDate(created_at)}</p>
      </div>
    </div>
  );
}
