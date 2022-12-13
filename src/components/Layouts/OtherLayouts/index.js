import Header from "./Header";
const OtherLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default OtherLayout;
