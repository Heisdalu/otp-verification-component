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

        <section className="grid grid-cols-4 [grid-gap:1rem] md:[grid-gap:32px] border-1 md:px-[2rem] my-[2rem]">
          <input
            type="number"
            name=""
            id=""
            maxLength="1"
            max="1"
            placeholder="0"
            className="placeholder:text-[#2E3650] h-[50px] text-[#2E3650] bg-[#1A2036] shadow-bc1 [border:1px_solid_#2E3650] rounded-[10px] w-[100%] flex justify-center items-center text-center md:h-[150px] font-lg"
          />
          <input
            type="number"
            name=""
            id=""
            maxLength="1"
            max="1"
            placeholder="0"
            className="placeholder:text-[#2E3650] text-[#2E3650] bg-[#1A2036] shadow-bc1 [border:1px_solid_#2E3650] rounded-[10px] w-[100%] flex justify-center items-center text-center md:h-[150px] font-lg"
          />
          <input
            type="number"
            name=""
            id=""
            maxLength="1"
            max="1"
            placeholder="0"
            className="placeholder:text-[#2E3650] text-[#2E3650] bg-[#1A2036] shadow-bc1 [border:1px_solid_#2E3650] rounded-[10px] w-[100%] flex justify-center items-center text-center md:h-[150px] font-lg"
          />
          <input
            type="number"
            name=""
            id=""
            maxLength="1"
            max="1"
            placeholder="0"
            className="placeholder:text-[#2E3650] text-[#2E3650] bg-[#1A2036] shadow-bc1 [border:1px_solid_#2E3650] rounded-[10px] w-[100%] flex justify-center items-center text-center md:h-[150px] font-lg"
          />
        </section>

        <button className="mt-[1rem] px-[2rem] py-[1rem] mx-auto font-inter font-black rounded-[6px] bg-[#1A2036] shadow-bc2 text-[#fff] md:px-[5rem]">
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default App;
