import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Button = ({ otp, length }) => {
  const [valid, setValid] = useState({ type: null, okay: false });
  const [touched, setTouched] = useState(false);
  const realNumber = otp
    .filter((i) => i !== "")
    .filter((el) => Number.isFinite(Number(el)));


  const clickHandler = () => {
    setTouched(true);
    if (realNumber.length !== length) {
      return setValid({ type: "clicked", okay: false });
    }

    return setValid({ type: "clicked", okay: true });
  };

  useEffect(() => {
    if (realNumber.length === length) {
      setValid({ type: "clicked", okay: true });
    }

    if (realNumber.length !== length && touched) {
      setValid({ type: "clicked", okay: false });
    }
  }, [length, otp, realNumber.length, touched]);

  return (
    <button
      className={`mt-[1rem] px-[2rem] py-[1rem] mx-auto font-inter font-black rounded-[8px] bg-[#1A2036] shadow-bc2 text-[#fff] md:px-[5rem] text-[1.2rem] active:shadow-bc3 ${
        valid.type && valid.okay
          ? "valid"
          : valid.type === "clicked"
          ? "error"
          : ""
      }`}
      onClick={clickHandler}
    >
      Verify OTP
    </button>
  );
};
export default Button;

Button.propTypes = {
  otp: PropTypes.array,
  length: PropTypes.number,
};
