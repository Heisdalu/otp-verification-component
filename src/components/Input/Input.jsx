import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { formatNumber, removeFocusOnLastChild } from "../../utils/helper";

const Input = ({ index, increaseCounter, counter, length, otpHandler }) => {
  const inputRef = useRef();
  const active = index === counter;

  const defaultFunc = (e, inputRef, index, length, counter, value = null) => {
    if (index === counter) {
      removeFocusOnLastChild(index, length, inputRef);
      otpHandler(index, e.target.value);
      increaseCounter(value);
    }
  };

  const handler = (e) => {
    formatNumber(e);

    if (e.key === "Backspace") {
      if (!inputRef.current.value) {
        return defaultFunc(e, inputRef, index, length, counter, {
          type: "BACKWARDS",
        });
      } else {
        e.target.value = "";
        otpHandler(index, "");
      }
    }

    if (!Number.isFinite(Number(e.key))) return;

    return defaultFunc(e, inputRef, index, length, counter);
  };

  const editHandler = (e) => {
    formatNumber(e);
  };

  const loseHandler = () => {
    increaseCounter({ type: "DEFAULT", value: index });
  };

  const upHand = (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
    }
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
      onKeyDown={upHand}
      onChange={editHandler}
      onClick={loseHandler}
      onPaste={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
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
