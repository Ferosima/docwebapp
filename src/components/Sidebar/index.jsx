import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { setSidebarState } from "../../store/actions/app";
import { logout } from "../../store/actions/auth";
import { getSidebarState } from "../../store/selectors/app";
import { getCurrentOrganizationState } from "../../store/selectors/organizations";
import { getUserState } from "../../store/selectors/user";
import { SidebarItem } from "../SidebarItem";
import { Arrow, Container, Header, Wrapper, Background } from "./style";
class Sidebar extends React.Component {
  handleClick = () => {
    const { isSidebarOpen, setSidebarState } = this.props;
    setSidebarState(!isSidebarOpen);
  };

  handleChildClick = (e) => {
    e.stopPropagation();
  };

  isMatch = (path) => this.props.location.pathname.includes(path);

  renderItem = ({ path, icon, name }, index) => {
    return <SidebarItem key={index} path={path} name={name} icon={icon} />;
  };

  renderHeader = (isOpen) => (
    <Header isOpen={isOpen}>
      <img src={assetsData.images.Logo} alt="Logo" />
      <p>Docwebapp</p>
    </Header>
  );

  renderOrganizationItem = (name, theme) => {
    return (
      <SidebarItem path="/app/organization/" name={name || `Create organization`} icon="organization" type={"header"} />
    );
  };

  render() {
    const { user, logout, currentOrganization, routers, default_routers, isSidebarOpen } = this.props;
    const { firstName, secondName } = user;
    return (
      <Background isOpen={isSidebarOpen} onClick={this.handleClick}>
        <Wrapper isOpen={isSidebarOpen} onClick={this.handleChildClick}>
          <Container>
            {currentOrganization
              ? this.renderOrganizationItem(currentOrganization.name, "header")
              : this.renderHeader(isSidebarOpen)}
            <Arrow name="arrowLeft" size="20px" color="#4D5F68" onClick={this.handleClick} isOpen={isSidebarOpen} />
            {currentOrganization ? <>{routers.map(this.renderItem)}</> : this.renderOrganizationItem()}
            {default_routers.map(this.renderItem)}
          </Container>
          <Container padding="0 0 20px 0">
            <SidebarItem path="/app/user/" name={`${firstName} ${secondName}`} icon="user" />
            <SidebarItem onClick={logout} name="Log out" icon="logout" isNonActive />
          </Container>
        </Wrapper>
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  isSidebarOpen: getSidebarState(state),
  currentOrganization: getCurrentOrganizationState(state),
  user: getUserState(state),
});
const mapDispatchToProps = {
  setSidebarState,
  logout,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(Sidebar);
