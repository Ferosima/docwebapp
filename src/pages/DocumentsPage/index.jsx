import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import Button from "../../components/Button";
import ClipLoader from "react-spinners/ClipLoader";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { fetchDocuments } from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import { Button, Container, Text, Wrapper } from "./style";
class DocumentsPage extends React.Component {
  componentDidMount() {
    this.props.fetchDocuments();
  }

  renderCard(data, index) {
    return <Card data={data} key={index} />;
  }

  renderEmpty = () => (
    <>
      <Text>You don&apos;t have a documents</Text>
      <Button image={assetsData.images.addDoc} text={"Add Document"} />
    </>
  );

  renderContent = (list) => (list.length ? list.map(this.renderCard) : this.renderEmpty());

  render() {
    console.log(this.props.store);
    const { list, panding } = this.props.documents;
    return (
      <Wrapper>
        <Header buttons={[{ name: "add", action: console.log("add") }]} />
        <Container>
          {!panding ? (
            this.renderContent(list)
          ) : (
            <ClipLoader color="#407bff" loading={panding} size={20} />
          )}
        </Container>
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
