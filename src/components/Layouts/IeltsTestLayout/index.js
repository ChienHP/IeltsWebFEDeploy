import Footer from "./Footer";
import Header from "./Header";

const IeltsTestLayout = ({children}) => {
  return (
    <div>
      <Header></Header>
        {children}
      <Footer></Footer>
    </div>
  );
};

export default IeltsTestLayout