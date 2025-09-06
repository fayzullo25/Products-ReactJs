import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Index = () => {
  return (
    <header className="bg-amber-100 h-[10vh]">
      <div className=" h-[100%] w-[90%] m-auto flex justify-between items-center">
        <h1 className="text-3xl">
          <Link to="/">Context Store</Link>
        </h1>
        <nav className="flex items-center  gap-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link to="/shopping-card">
            <div className="relative">
              <span class=" absolute top-[-13px] right-[-13px] inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
                0
              </span>

              <FaShoppingCart className="text-2xl  text-gray-700" />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Index;
