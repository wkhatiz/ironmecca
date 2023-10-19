import { useState, useEffect } from "react";

type menuProps = {
  menuVisible: boolean;
};

function Menu(props: menuProps) {
  const { menuVisible } = props;

  const [visibleClass, setVisibleClass] = useState<string>("");

  useEffect(() => {
    setVisibleClass(menuVisible ? "" : "translate-y-[-300px]");
  }, [menuVisible]);

  return (
    <nav
      className={`fixed w-[75vw] ${visibleClass} transition-transform translate-x-[15%] bg-slate-700 block mx-auto rounded-lg`}
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
  );
}

export default Menu;
