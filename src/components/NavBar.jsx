import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import ListIcon from "@mui/icons-material/List";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

const NavBar = () => {
  const [extendedNavBar, setExtendedNavBar] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <nav className="flex justify-between items-center h-20 text-gray-200 px-10 bg-amber-500">
        <h1 className="text-4xl font-bold">Logo</h1>
        <div className="flex items-center gap-6">
          <ul
            className={`md:static flex flex-col md:flex-row p-6 lg:gap-6 md:p-0 rounded-lg md:rounded-none bg-gray-200 md:bg-transparent text-black md:text-white font-semibold absolute top-24 md:top-auto ${
              extendedNavBar ? "right-4" : "top-[-280px] right-[-110px]"
            }`}
          >
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            {isLoggedIn ? (
              <div className="md:flex-row lg:flex lg:gap-6">
                <li className="hover:text-gray-400 cursor-pointer">Blogs</li>
                <li className="hover:text-gray-400 cursor-pointer">MyBlogs</li>
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </li>
              </div>
            ) : (
              <div className="md:flex-row lg:flex lg:gap-6">
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={login}
                >
                  Login
                </li>
                <li className="hover:text-gray-400 cursor-pointer">Sign-up</li>
              </div>
            )}
          </ul>
          <div
            className="flex md:hidden p-1 bg-gray-200 text-gray-500 shadow-md hover:bg-gray-100"
            onClick={() => {
              setExtendedNavBar((currentState) => !currentState);
            }}
          >
            {extendedNavBar ? <DisabledByDefaultIcon /> : <ListIcon />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
