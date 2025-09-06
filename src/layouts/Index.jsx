import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-[70vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Index;
