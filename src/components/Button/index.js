import React from 'react';

class Button extends React.Component {
  render() {
    const {
      text, className, onClick, style,
    } = this.props;
    return (
      <button type="button" className={className} onClick={onClick} style={style}>
        <p>{text}</p>
      </button>
    );
  }
}

export default Button;
