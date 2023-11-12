import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  let [menuHiddenClass, setMenuHiddenClass] = useState<string>(
    "translate-y-[-300px]"
  );

  function menuClickHandler() {
    setMenuHiddenClass(menuHiddenClass ? "" : "translate-y-[-300px]");
  }

  return (
    <>
      <header className="bg-slate-200 h-16 static top-0 w-full flex justify-center">
        <div className="flex justify-between items-center w-full h-full p-2 max-w-[1600px]">
          <div id="left-header-container">
            <Link to="/">
              <h1 className="font-bold text-xl cursor-pointer">Iron Mecca</h1>
            </Link>
          </div>
          <div id="middle-header-container">
            <ul className="hidden">
              <a>Powerlifting</a>
              <a>Weightlifting</a>
              <a>Crossfit</a>
            </ul>
          </div>
          <div id="right-header-container" className="flex">
            <Link
              to="checkout"
              className="px-3 cursor-pointer hover:font-bold hover:text-gray-800 decoration-transparent"
            >
              Cart - {0}
            </Link>
            <p
              className="cursor-pointer hover:font-bold hover:text-gray-800 decoration-transparent"
              onClick={menuClickHandler}
            >
              {menuHiddenClass ? "Menu" : "Hide"}
            </p>
          </div>
        </div>
      </header>
      {/* above is the jsx for the header. below is the jsx for the dropdown nav menu*/}
      <nav
        className={`fixed w-[75vw] ${menuHiddenClass} transition-transform translate-x-[15%] bg-slate-700 block mx-auto rounded-lg`}
      >
        <ul>
          <li className="text-white text-lg p-3 pl-5 w-full hover:bg-slate-500 hover:font-bold cursor-pointer">
            <a>Option A</a>
          </li>
          <li className="text-white text-lg p-3 pl-5 w-full hover:bg-slate-500 hover:font-bold cursor-pointer">
            <a>Option B</a>
          </li>
          <li className="text-white text-lg p-3 pl-5 w-full hover:bg-slate-500 hover:font-bold cursor-pointer">
            <a>Option C</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
