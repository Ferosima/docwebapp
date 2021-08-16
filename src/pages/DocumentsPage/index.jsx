import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import Button from "../../components/Button";
import ClipLoader from "react-spinners/ClipLoader";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { DocumentCard as Card } from "../../components/Card";
import Header from "../../components/Header";
import { fetchDocuments } from "../../store/actions/documents";
import { getDocumentsState } from "../../store/selectors/documents";
import { Button, Container, Grid, Text, Wrapper } from "./style";
import { list } from "../../mockData";
import EmptyPlug from "../../components/EmptyPlug";
import { colors } from "../../components/Avatar/colors";
import LoadingPlug from "../../components/LoadingPlug";
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

  renderContent = (list) =>
    list.length ? (
      <Container>
        <Grid>{list.map(this.renderCard)}</Grid>
      </Container>
    ) : (
      <EmptyPlug
        image={assetsData.images.addDoc}
        text="You don't have a documents"
        buttonText="Add Document"
        // onClick={() => console.log("HI")}
      />
    );

  render() {
    const { list, panding } = this.props.documents;
    return (
      <Wrapper>
        <Header title="Documents" buttons={[{ name: "add", action: console.log("add") }]} />
        {!panding ? this.renderContent(list) : <LoadingPlug panding={panding} />}
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
