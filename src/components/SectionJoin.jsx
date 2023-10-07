import React from "react";
import { AiOutlineTrademarkCircle } from "react-icons/ai";

const SectionJoin = () => {
  return (
    <div className="h-[450px] bg-cover bg-center flex flex-col items-center justify-center mt-[70px] relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-dark mix-blend-darken shadow-md bg-[url('https://assets.tmecosys.com/image/upload/t_web1440x450@2x/cdn/contentful/UuQRy6JEESKrqRDZHBWge/a17da48ce5e79b925564cacca661c47e/shutterstock_526855693-min.jpg')]">
      <div className="absolute w-full flex flex-col items-center justify-center text-white gap-2">
        <h1 className="relative font-bold lg:text-[3.5rem]">
          Dołącz do Cookidoo
        </h1>
        <p className="sm:text-[12px] md:text-[14px] lg:text-[20px]">
          Tysiące przepisów. Niewyczerpane źródło inspiracji.
        </p>
        <a
          href="/abonament"
          className="uppercase p-[9px] sm:text-[10px] md:text-[12px] lg:text-[16px] bg-litegreen font-bold rounded-lg mt-4 hover:brightness-90"
        >
          Wypróbuj bezpłatnie
        </a>
      </div>
    </div>
  );
};

export default SectionJoin;
