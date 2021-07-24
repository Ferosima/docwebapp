import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { setSidebarState } from "../../store/actions/app";
import { getSidebarState } from "../../store/selectors/app";
import { getUserState } from "../../store/selectors/user";
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
    const { firstName, secondName } = this.props.user;
    return (
      <SidebarWrapper isOpen={isOpen}>
        <Container>
          <Header isOpen={isOpen}>
            <img src={assetsData.images.Logo} alt="Logo" />
            <p>Docwebapp</p>
          </Header>
          <Arrow
            name="arrowLeft"
            size="20px"
            color="#4D5F68"
            onClick={() => this.handleClick()}
            isOpen={isOpen}
          />
          {this.props.routers.map(this.renderItem)}
        </Container>
        <Container padding="0 0 20px 0">
          <SidebarItem
            isOpen={isOpen}
            path="/app/user/"
            name={`${firstName} ${secondName}`}
            icon="user"
            withoutBorder
          />
          <SidebarItem
            isOpen={isOpen}
            path="/app/settings/"
            name="Settings"
            icon="settings"
            withoutBorder
          />
        </Container>
      </SidebarWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isSidebarOpen: getSidebarState(state),
  user: getUserState(state),
});
const mapDispatchToProps = {
  setSidebarState,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(Sidebar);
