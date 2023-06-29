import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { formatNumber, removeFocusOnLastChild } from "../../utils/helper";
const Input = ({ index, increaseCounter, counter, length, otpHandler }) => {
  const inputRef = useRef();
  const active = index === counter;

  const handler = (e) => {
    formatNumber(e);

    if (!Number.isFinite(Number(e.key))) return;

    if (active) {
      removeFocusOnLastChild(index, length, inputRef);
      otpHandler(index, e.target.value);
      increaseCounter();
    }
  };

  const editHandler = (e) => {
    formatNumber(e);
  };

  const loseHandler = () => {
    increaseCounter(index);
  };

  useEffect(() => {
    if (active) return inputRef.current.focus();
    if (!active) {
      inputRef.current.classList.remove("activeBorder");
      inputRef.current.blur();
      return;
    }
  }, [active, counter]);

  return (
    <input
      type="number"
      name=""
      id=""
      onKeyUp={handler}
      onChange={editHandler}
      onClick={loseHandler}
      placeholder="0"
      ref={inputRef}
      className={`input ${active && "activeBorder"}`}
    />
  );
};
export default Input;

Input.propTypes = {
  index: PropTypes.number,
  counter: PropTypes.number,
  increaseCounter: PropTypes.func,
  length: PropTypes.number,
  otpHandler: PropTypes.func,
};
