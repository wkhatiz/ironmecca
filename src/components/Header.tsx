function Header() {
  return (
    <>
      <header className="bg-slate-200 flex justify-between items-center h-16 static top-0 w-full p-2">
        <div
          id="left-header-container"
        >
          <h1 className="font-bold text-xl cursor-pointer">Iron Mecca</h1>
        </div>
        <div
          id="middle-header-container"
        >
          <ul className="hidden">
            <a>
              Powerlifting
            </a>
            <a>
              Weightlifting
            </a>
            <a>
              Crossfit
            </a>
          </ul>
        </div>
        <div
          id="right-header-container"
        >
          <p className="cursor-pointer">
            Menu
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
