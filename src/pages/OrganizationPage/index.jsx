import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Wrapper, Title, Container } from "./style";
import { createOrganization } from "../../store/actions/organizations";
import { getOrganizationsState } from "../../store/selectors/organizations";
import OrganizationForm from "../../components/OrganizationForm";
import Header from "../../components/Header";

class OrganizationPage extends React.Component {
  render() {
    const { organizations, createOrganization } = this.props;
    const { currentOrganization, panding } = organizations;
    console.log(organizations);
    return (
      <Wrapper>
        <Header title={`${currentOrganization?.name || "Create Organization"}`} />
        <Container>
          <OrganizationForm
            action={!currentOrganization && createOrganization}
            panding={panding}
            data={currentOrganization}
          />
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
