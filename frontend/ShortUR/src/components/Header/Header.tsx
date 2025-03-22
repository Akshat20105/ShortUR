import * as React from "react";

const Header: React.FunctionComponent = () => {
  return (
    <header className="bg-blue-800 text-white w-full shadow-md sm:rounded-2xl">
      <div className=" mx-135 px-6 py-4 flex justify-between">
        <h1 className="text-2xl font-bold tracking-wide ">ShortUR</h1>
        <h6 className="text-sm py-2 text-nowrap">(Pronounced Short-er)</h6>
      </div>
    </header>
    
  );
};

export default Header;
