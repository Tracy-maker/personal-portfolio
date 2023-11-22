import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-24 h-14 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SunYeang</p>
      </NavLink>
      <nav className="flex text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "purple-gradient_text"
          }
        >
          About Me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
