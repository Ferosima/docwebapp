import React from "react";
import { Wrapper } from "./style";

const theme = {
  main: { background: "#407BFF", color: "#fff" },
};
class Button extends React.Component {
  render() {
    const {
      text, className, onClick, style, image,
    } = this.props;
    return (
      <Wrapper className={className} onClick={onClick} style={style}>
        {image && <img src={image} alt="img" />}
        <p>{text}</p>
      </Wrapper>
    );
  }
}

export default Button;
