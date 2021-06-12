import React from "react";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { connect } from "react-redux";
import { compose } from "redux";
import { setSidebarState } from "../../store/actions/app";
import { getSidebarState } from "../../store/selectors/app";
import SidebarLink from "../SidebarLink";
import "./style.css";

class Sidebar extends React.Component {
  renderSidebarHeader() {
    const { setSidebarState, isSidebarOpen } = this.props;
    return (
      <div className="header">
        <h3 className="title">Docwebapp</h3>
        <IconContext.Provider
          value={{
            className: "icon_menu",
            size: "20px",
          }}
        >
          {/* <div onClick={() => setSidebarState(!isSidebarOpen)}>
            <FiMenu />
          </div> */}
        </IconContext.Provider>
      </div>
    );
  }

  render() {
    const { isSidebarOpen, routers } = this.props;
    return (
      <div className={`sidebar${isSidebarOpen ? "" : " hide"}`}>
        {this.renderSidebarHeader()}
        <div className="menu">
          {routers.map((route) => (
            <SidebarLink activeOnlyWhenExact={route.exact} to={route.path} label={route.name} />
          ))}
        </div>
      </div>
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

export default compose(withConnect)(Sidebar);
