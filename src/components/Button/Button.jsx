import propTypes from "prop-types";

import classes from "./Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
