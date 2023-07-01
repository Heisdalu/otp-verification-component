import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "../Button/Button";

const InputList = ({ boxList }) => {
  const [counter, setCounter] = useState(1);
  const [otpValue, setOtpValue] = useState([]);

  const increaseCounter = (obj) => {
    if (obj?.type === "DEFAULT") {
      return setCounter(obj.value);
    }

    if (obj?.type === "BACKWARDS") {
      return setCounter((prev) => prev - 1);
    }

    if (obj?.type === "BACKSPACE") {
      return;
    }

    if (counter + 1 >= boxList.length) {
      return setCounter(boxList.length);
    }

    setCounter((prev) => prev + 1);
  };

  const otpHandler = (index, value) => {
    const arr = [...otpValue];
    arr[index - 1] = value;
    setOtpValue(arr);
  };

  return (
    <>
      <section className="grid grid-cols-4 [grid-gap:1rem] md:[grid-gap:32px] border-1 md:px-[2rem] my-[2rem]">
        {boxList.map((_, id) => (
          <Input
            key={`${id + "22"}`}
            index={id + 1}
            counter={counter}
            increaseCounter={increaseCounter}
            otpHandler={otpHandler}
            length={boxList.length}
          />
        ))}
      </section>
      <Button otp={otpValue} length={boxList.length} />
    </>
  );
};
export default InputList;

// psseudo rules......
// counter = 1 and gets getting added to track every field
// implement input as a list to assign number to it;
//

InputList.propTypes = {
  boxList: PropTypes.array,
};
