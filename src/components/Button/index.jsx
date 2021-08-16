import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Wrapper } from "./style";

const theme = {
  main: { background: "#407BFF", color: "#fff" },
};
class Button extends React.Component {
  render() {
    const {
      text, className, onClick, style, image, panding, isImageRight,
    } = this.props;
    return (
      <Wrapper
        className={className}
        onClick={!panding ? onClick : undefined}
        style={style}
        reverse={isImageRight}
      >
        {panding ? (
          <ClipLoader color="#fff" loading={panding} size={20} />
        ) : (
          <>
            {image && <img src={image} alt="img" />}
            <p>{text}</p>
          </>
        )}
      </Wrapper>
    );
  }
}

export default Button;
