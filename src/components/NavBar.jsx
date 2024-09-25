import { Link } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About us",
    },
    {
      path: "/login",
      title: "Login",
    },
    {
      path: "/sign-up",
      title: "Sign up",
    },
  ];

  return (
    <>
      <div className="navbar bg-[#1B1919] sticky z-20 top-0 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((eachLink) => (
                // MOBILE
                <li
                  className="bg-slate-900 hover:bg-yellow-500 text-white hover:text-black py-3"
                  key={eachLink.path}
                >
                  {eachLink.title}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl text-yellow-400 font-bold"
          >
            UapCafe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-4">
            {navLinks.map((eachLink) => (
              // DESKTOP
              <li
                className="bg-slate-100 hover:bg-yellow-500 text-black text-lg font-semibold hover:text-white py-3 px-5 rounded-xl cursor-pointer"
                key={eachLink.path}
              >
                {eachLink.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="#"
            className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">Login</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
