import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-[#ffffff] relative
        bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.35)_1px,transparent_0)]
        bg-[length:70px_70px]
        bg-fixed">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
