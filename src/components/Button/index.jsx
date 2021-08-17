import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Wrapper } from "./style";

const buttonsTheme = {
  main: { background: "#407BFF", color: "#fff" },
  outline: { background: "transparent", color: "#407BFF", border: "2px solid #407BFF" },
};
class Button extends React.Component {
  render() {
    const {
      text, className, onClick, image, panding, isImageRight, theme, ...other
    } = this.props;
    return (
      <Wrapper
        className={className}
        onClick={!panding ? onClick : undefined}
        reverse={isImageRight}
        theme={buttonsTheme[theme]}
        {...other}
      >
        {panding ? (
          <ClipLoader
            color={theme ? buttonsTheme[theme].color : "#fff"}
            loading={panding}
            size={20}
          />
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
