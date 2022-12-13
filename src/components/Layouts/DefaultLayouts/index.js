import Header from "./Header";
import Footer from "./Footer";
const DefaultLayouts = ({children}) => {
  return (
    <div>
      <Header></Header>
        {children}
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayouts