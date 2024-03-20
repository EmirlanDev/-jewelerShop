import React from "react";
import Card from "../card/Card";

export default function EspeciallyForYou({ title, description }) {
  const arr = [1, 2, 3, 4, 5, 5, 5, 5, 5];
  return (
    <div className="container">
      <div className="flex flex-col items-center">
        <h2 className="py-3 text-2xl font-medium mt-10">{title}</h2>
        <p className="text-center max-w-[600px]">{description}</p>
        <div className="flex min-w-[1200px] pl-[350px] w-full mt-10  justify-center gap-3 overflow-x-scroll ">
          {arr.map((card) => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
}
