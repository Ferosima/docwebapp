import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { setSidebarState } from "../../store/actions/app";
import { logout } from "../../store/actions/auth";
import { getSidebarState } from "../../store/selectors/app";
import { getUserState } from "../../store/selectors/user";
import { getCurrentWorkspacesState, getWorkspacesState } from "../../store/selectors/workspaces";
// import { routers, default_routers } from "./routes";
import { SidebarItem } from "../SidebarItem";
import { Arrow, Header, SidebarWrapper, Container } from "./style";

class Sidebar extends React.Component {
  state = {
    isOpen: true,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  isMatch = (path) => this.props.location.pathname.includes(path);

  renderItem = ({ path, icon, name }, index) => {
    const { isOpen } = this.state;
    return <SidebarItem key={index} isOpen={isOpen} path={path} name={name} icon={icon} />;
  };

  render() {
    const { isOpen } = this.state;
    const { user, logout, currentWorkspace } = this.props;
    const { firstName, secondName } = user;
    return (
      <SidebarWrapper isOpen={isOpen}>
        <Container>
          {currentWorkspace ? (
            <Header isOpen={isOpen}>
              <img src={assetsData.images.Logo} alt="Logo" />
              <p>Docwebapp</p>
            </Header>
          ) : (
            <SidebarItem
              style={{ margin: "20px 0 0" }}
              isOpen={isOpen}
              path="/app/workspace/"
              name={`Create workspace`}
              icon="user"
            />
          )}
          <Arrow
            name="arrowLeft"
            size="20px"
            color="#4D5F68"
            onClick={() => this.handleClick()}
            isOpen={isOpen}
          />
          {this.props.default_routers.map(this.renderItem)}
        </Container>
        <Container padding="0 0 20px 0">
          <SidebarItem
            isOpen={isOpen}
            path="/app/user/"
            name={`${firstName} ${secondName}`}
            icon="user"
          />
          <SidebarItem isOpen={isOpen} onClick={logout} name="Log out" icon="logout" isNonActive />
        </Container>
      </SidebarWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isSidebarOpen: getSidebarState(state),
  currentWorkspace: getCurrentWorkspacesState(state),
  user: getUserState(state),
});
const mapDispatchToProps = {
  setSidebarState,
  logout,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(Sidebar);
