import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import {
  Wrapper, Header, Title, Container,
} from "./style";
import { createOrganization } from "../../store/actions/organizations";
import { getOrganizationsState } from "../../store/selectors/organizations";
import OrganizationForm from "../../components/OrganizationForm";

class OrganizationPage extends React.Component {
  render() {
    const { organizations, createOrganization } = this.props;
    const { currentOrganization, panding } = organizations;
    console.log(organizations);
    return (
      <Wrapper>
        <Header>
          <Title>{currentOrganization?.name || "Create Organization"}</Title>
        </Header>
        <Container>
          <OrganizationForm action={!currentOrganization && createOrganization} panding={panding} />
        </Container>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  organizations: getOrganizationsState(state),
});
const mapDispatchToProps = {
  createOrganization,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(OrganizationPage);
