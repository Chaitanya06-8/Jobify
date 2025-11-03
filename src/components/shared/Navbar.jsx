import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const Navbar = ({ navbarRef }) => {
  return (
    <div
      ref={navbarRef}
      className="w-full flex justify-center shadow-md py-4 sm:py-5"
    >
      <div className="w-full max-w-[1200px] flex justify-between items-center px-4 sm:px-8">
        <Logo />
        <div className="flex justify-end items-center">
          <NavLink
            className="text-[16px] font-medium capitalize ml-5 text-black hover:scale-110 transition-transform duration-200"
            to="/all-jobs"
          >
            Jobs
          </NavLink>
          <NavLink
            className="hidden sm:block text-[16px] font-medium capitalize ml-5 text-black hover:scale-110 transition-transform duration-200"
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className="ml-5"
            to="/login"
          >
            <span className="bg-[#247BF7] text-white px-6 py-2 rounded hover:bg-sky-500 transition-colors duration-200">
              Login
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
