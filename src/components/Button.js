import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

//sets the default props values
Button.defaultProps = {
  color: "steelblue",
};

//sets the type of the props
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
