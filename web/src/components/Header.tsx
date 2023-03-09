import React from "react";
import logoImg from "../assets/image-9.svg";

function Header() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-2">
      <img src={logoImg} alt="" width={400} />
    </div>
  );
}

export default Header;
