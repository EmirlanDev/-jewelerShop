import React from "react";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed w-full py-2 z-10 bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="" className="text-[#56768B] font-bold text-xl ">
            Главная
          </a>
          <a href="" className="text-[#56768B] font-bold text-xl ">
            Каталог
          </a>
          <a href="">
            <img className="w-[130px]" src={logo} alt="" />
          </a>
          <a href="" className="text-[#56768B] font-bold text-xl ">
            Сертификат
          </a>
          <a href="" className="text-[#56768B] font-bold text-xl ">
            Контакты
          </a>
        </div>
      </div>
    </header>
  );
}
