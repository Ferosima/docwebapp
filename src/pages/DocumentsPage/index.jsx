import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { DocumentsListItem } from "../../components/DocumentListItem";
import documents from "../../mockData/documents";
import { fetchDocuments } from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { list } from "../../mockData/index";
import { Wrapper } from "./style";

class DocumentsPage extends React.Component {
  componentDidMount() {
    this.props.fetchDocuments();
  }

  renderCard(data, index) {
    return <Card data={data} key={index} />;
  }

  render() {
    console.log(this.props.store);
    const { list } = this.props.documents;
    return (
      <Wrapper>
        <Header buttons={[{ name: 'add', action: console.log('add') }]} />
        {list.map(this.renderCard)}
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
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(DocumentsPage);
