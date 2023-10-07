import React from "react";

const Abonament = () => {
  return (
    <div className="w-screen flex justify-center pr-[20px]">
      <div className="h-screen w-[1200px] mt-[100px]">
        <h1 className="text-green font-bold pt-[40px] pb-[15px] sm:text-[20px] md:text-[25px] lg:text-[35px]">
          Odkryj abonament Cookidoo
        </h1>
        <p className="mb-[25px] sm:text-[12px] md:text-[14px] lg:text-[18px]">
          <span className="font-semibold">
            Rozpocznij 30-dniowy bezpłatny okres próbny Cookidoo, a zupełnie
            nowy świat doznań kulinarnych stanie przed Tobą otworem.
          </span>
          <br></br> Wspaniałe domowe jedzenie. Łatwiej. Inteligentniej. Lepiej.
        </p>
        <a
          href="/abonament"
          className="py-3 px-4 text-litegreen uppercase font-semibold border-2 border-litegreen hover:brightness-75 rounded-[4px] sm:text-[12px] md:text-[14px] lg:text-[18px]"
        >
          Wypróbuj Bezpłatnie!
        </a>
        <img
          className="mt-16"
          src="https://assets.tmecosys.com/image/upload/t_web968/cdn/contentful/5fv1na0DUFgAPAn6uDunDE/9c77688c7074b9ad632ecf721e641e53/int_thermomix_TM6_product-lifestyle_0051_medium__2_.jpg"
          alt="happyPeople"
        />
      </div>
    </div>
  );
};

export default Abonament;
