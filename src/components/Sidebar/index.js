import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { setSidebarState } from "../../store/actions/app";
import { getSidebarState } from "../../store/selectors/app";
import Icon from "../Icon";
import SidebarMenuItem from "../SidebarMenuitem";
import "./style.css";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  handleClick = () => {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle("is-sidebar-small");
  };

  renderSidebarHeader() {
    const { setSidebarState, isSidebarOpen } = this.props;
    return (
      <div className="header">
        <div className="image">
          <img style={{ width: "100%", height: "100%" }} src={assetsData.images.Logo} alt="Docs" />
        </div>
        <h3 className="title">Docwebapp</h3>
      </div>
    );
  }

  render() {
    const { isSidebarOpen, routers } = this.props;
    return (
      <div className={`sidebar${isSidebarOpen ? "" : " hide"}`} ref={this.wrapperRef}>
        {this.renderSidebarHeader()}
        <Icon
          name="arrowLeft"
          size="20px"
          color="#4D5F68"
          className="icon"
          onClick={() => this.handleClick()}
        />
        <div className="menu">
          {routers.map((route) => (
            <SidebarMenuItem
              activeOnlyWhenExact={route.exact}
              to={route.path}
              label={route.name}
              icon={route.icon}
            />
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
