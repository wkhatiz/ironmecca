function Header() {
  return (
    <>
      <header className=" bg-slate-200 flex justify-between h-16 static top-0 w-full">
        <div
          id="left-header-container"
          className="h-full flex justify-center items-center"
        >
          <h1 className=" text-2xl px-4 font-bold">Iron Mecca</h1>
        </div>
        <div
          id="middle-header-container"
          className="h-full flex justify-center items-center"
        >
          <ul className="px-4">
            <a className="hover:text-slate-500 font-bold cursor-pointer">
              Powerlifting
            </a>
          </ul>
          <ul className="px-4">
            <a className="hover:text-slate-500 font-bold cursor-pointer">
              Weightlifting
            </a>
          </ul>
          <ul className="px-4">
            <a className="hover:text-slate-500 font-bold cursor-pointer">
              Crossfit
            </a>
          </ul>
        </div>
        <div
          id="right-header-container"
          className="h-full flex justify-center items-center"
        >
          <p className=" px-4 hover:text-gray-500 font-bold cursor-pointer">
            Placeholder
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
