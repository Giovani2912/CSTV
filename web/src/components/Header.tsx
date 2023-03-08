import React from "react";
import logoImg from "../assets/image-9.svg";

function Header() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" width={400} />

      <h1 className="text-6xl text-white font-black mt-2">
        Suas{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          atualizações
        </span>{" "}
        estão aqui.
      </h1>
    </div>
  );
}

export default Header;
