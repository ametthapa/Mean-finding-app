import Header from "./header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200">
      <div className="lg:max-w-screen-lg md:max-w-screen-md bg-white m-auto">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
