import { Outlet } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
          <Outlet />
      <Footer />
    </div>
  );
};
export default DefaultLayout;
