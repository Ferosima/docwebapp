import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { DocumentsListItem } from "../../components/DocumentListItem";
import documents from "../../mockData/documents";
import { fetchDocuments } from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import "./style.css";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { mock_data } from '../../mockData/index';

class DocumentsPage extends React.Component {
  componentDidMount() {
    this.props.fetchDocuments();
  }

  renderCard = (data, index) => {
    <Card data={data} key={index} />;
  };

  render() {
    const { list } = this.props.documents;
    return (
      <>
        <Header buttons={[{ name: 'add', action: console.log('add') }]} />;
        {list.map(renderCard)}
      </>
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
