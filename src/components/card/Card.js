import React from "react";

export default function Card() {
  return (
    <div className="min-w-[300px] flex flex-col p-3 border-2 border-red gap-2 ">
      <img
        src="https://m.artauro.ru/cdn/mobile/item/slider/2f0647ef-9237-4859-a87d-0a8034f57382.png"
        alt=""
      />
      <p className="text-[18px] text-gray-600 font-semibold">
        Серьги пусеты из белого золота с бриллиантами
      </p>
      <span className="text-gray-500">
        Артикул: <span className="text-black font-bold">YZ1324</span>
      </span>
      <span className="text-[#56768B] font-semibold">В наличии</span>
      <p className="font-bold text-[23px]">864 638 ₽</p>
      <button className="bg-[#56768B] py-3 text-white rounded-md">
        В корзину
      </button>
      <button className="bg-white py-3 text-[#56768B] rounded-md">
        Купить в один клик
      </button>
    </div>
  );
}
