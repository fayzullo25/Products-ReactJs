import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-[80vh]">
        <div className="w-[90%] mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
