const InputList = ({ children }) => {
  return (
    <section className="grid grid-cols-4 [grid-gap:1rem] md:[grid-gap:32px] border-1 md:px-[2rem] my-[2rem]">
      {children}
    </section>
  );
};
export default InputList;
