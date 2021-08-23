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
import { Arrow, Container, Header, SidebarWrapper } from "./style";

class Sidebar extends React.Component {
  state = {
    isOpen: true,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
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
      <SidebarItem
        // style={style}
        path="/app/organization/"
        name={name || `Create organization`}
        icon="organization"
        theme={theme}
      />
    );
  };

  render() {
    const { user, logout, currentOrganization, routers, default_routers } = this.props;
    const { firstName, secondName } = user;
    const { isOpen } = this.state;
    return (
      <SidebarWrapper isOpen={isOpen}>
        <Container>
          {currentOrganization
            ? this.renderOrganizationItem(currentOrganization.name, "header")
            : this.renderHeader(isOpen)}
          <Arrow
            name="arrowLeft"
            size="20px"
            color="#4D5F68"
            onClick={() => this.handleClick()}
            isOpen={isOpen}
          />
          {currentOrganization ? (
            <>{routers.map(this.renderItem)}</>
          ) : (
            this.renderOrganizationItem()
          )}
          {default_routers.map(this.renderItem)}
        </Container>
        <Container padding="0 0 20px 0">
          <SidebarItem path="/app/user/" name={`${firstName} ${secondName}`} icon="user" />
          <SidebarItem onClick={logout} name="Log out" icon="logout" isNonActive />
        </Container>
      </SidebarWrapper>
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
