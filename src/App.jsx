import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import InputList from "./components/Input/InputList";

const App = () => {
  return (
    <div className="h-[100vh] bg-[#1A2036] flex justify-center items-center px-[1.5rem]">
      <div className="flex flex-col w-[100%] max-w-[700px] rounded-[25px] bg-[#252B42] shadow-bc1 p-[2rem]">
        <h1 className="text-[#B1B9D8] text-[26px] font-inter font-lg text-center">
          Verify your email address
        </h1>
        <p className="text-[#8795C5] text-center text-[14px] font-inter">
          A four-digit code has been sent to your email name@frontendpro.dev
        </p>

        <InputList>
          <Input />
          <Input />
          <Input />
          <Input />
        </InputList>

        <Button />
      </div>
    </div>
  );
};

export default App;
