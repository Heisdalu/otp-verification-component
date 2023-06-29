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
    // if (!Number.isFinite(Number(e.target.value))) return;
    if (e.key === "ArrowLeft") {
      const arrowLeftValue = counter - 1 <= 1 ? 1 : counter;
      console.log(arrowLeftValue);
      defaultFunc(e, inputRef, index, length, counter, { type: "BACKWARDS" });
    }

    if (e.key === "ArrowRight") {
      return defaultFunc(e, inputRef, index, length, counter);
    }

    if(e.key === 'Backspace') {
        
    }

    if (!Number.isFinite(Number(e.key))) return;

    return defaultFunc(e, inputRef, index, length, counter);
    // if (active) {
    //   removeFocusOnLastChild(index, length, inputRef);
    //   otpHandler(index, e.target.value);
    //   increaseCounter();
    // }
  };

  const editHandler = (e) => {
    formatNumber(e);
  };

  const loseHandler = () => {
    increaseCounter({ type: "DEFAULT", value: index });
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
