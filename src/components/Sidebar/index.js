import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { setSidebarState } from "../../store/actions/app";
import { getSidebarState } from "../../store/selectors/app";
import Icon from "../Icon";
import { Arrow, Header, Item, SidebarWrapper } from "./style";

class Sidebar extends React.Component {
  state = {
    isOpen: true,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  isMatch = (path) => this.props.location.pathname.includes(path);

  renderItem = ({ path, icon, name }) => {
    const { isOpen } = this.state;
    const isMatch = this.isMatch(path);
    return (
      <Item to={path} isActive={isMatch} isOpen={isOpen}>
        <Icon name={icon} color={isMatch ? "#3751FF" : null} size="1em" />
        <p>{name}</p>
        <div />
      </Item>
    );
  };

  render() {
    const { isOpen } = this.state;
    return (
      <SidebarWrapper isOpen={isOpen}>
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
      </SidebarWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isSidebarOpen: getSidebarState(state),
});
const mapDispatchToProps = {
  setSidebarState,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(Sidebar);
