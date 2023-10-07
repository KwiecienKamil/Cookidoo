import React from "react";

const Help = () => {
  return (
    <div className="w-screen flex justify-center pr-[20px]">
      <div className="h-screen w-[1200px] mt-[100px]">
        <h1 className="text-green font-bold pt-[40px] pb-[15px] sm:text-[18px] md:text-[24px] lg:text-[35px]">
          Jak możemy ci pomóc?
        </h1>
        <p className="sm:text-[12px] md:text-[14px] lg:text-[16px]">
          Jeśli szukasz odpowiedzi na często zadawane pytania, danych
          kontaktowych lub potrzebujesz pomocy w korzystaniu z nowych funkcji,
          chętnie Ci pomożemy.
        </p>
        <div className="h-[290px] w-full flex justify-start gap-8 mt-[60px]">
          <div className="h-full w-[42%] rounded-[4px] bg-cover bg-center  bg-[url('https://assets.tmecosys.com/image/upload/t_web640/cdn/contentful/6ApyT7cMh1i7oHDZq3gGrx/c6b7b984880909c9ffb4e840aedae469/Tutorial.png')]"></div>
          <div className="w-[48%] flex flex-col gap-2">
            <h1 className="text-green font-bold sm:text-[18px] lg:text-[25px]">
              Samouczki
            </h1>
            <p className="font-semibold sm:text-[12px] md:text-[14px] lg:text-[18px]">
              {" "}
              Czy chcesz dowiedzieć się, jak importować lub tworzyć przepis
              <br></br> na Cookidoo?
            </p>
            <p className="sm:text-[12px] md:text-[14px] lg:text-[18px]">
              Sprawdź nasze samouczki. Od tworzenia i importowania własnych
              przepisów po porady i sztuczki kulinarne — nasze samouczki
              zapewnią Ci wszystko, co niezbędne.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="bg-litegreen text-white font-bold py-3 px-4 rounded-[4px] sm:text-[12px] md:text-[14px] lg:text-[18px] uppercase hover:brightness-90"
              >
                Zacznij naukę
              </a>
            </div>
          </div>
        </div>
        <div className="h-[290px] w-full flex justify-start gap-8 mt-[60px]">
          <div className="h-full w-[42%] rounded-[4px] bg-cover bg-center  bg-[url('https://assets.tmecosys.com/image/upload/t_web640/cdn/contentful/2yjbLV0TnU9LUhXP0cdm2m/1ed97ae6c4fbe69d519a650347b9f586/helpcenter.png')]"></div>
          <div className="w-[48%] flex flex-col gap-2">
            <h1 className="text-green font-bold sm:text-[12px] md:text-[14px] lg:text-[25px]">
              Centrum pomocy
            </h1>
            <p className="font-semibold sm:text-[12px] md:text-[14px] lg:text-[18px]">
              Potrzebujesz pomocy z Cookidoo lub urządzeniem Thermomix®?
            </p>
            <p className="sm:text-[12px] md:text-[14px] lg:text-[18px]">
              Zapoznaj się z pytaniami i odpowiedziami w Centrum pomocy<br></br>{" "}
              Vorwerk lub skontaktuj się z nami.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="bg-litegreen text-white font-bold py-3 px-4 rounded-[4px] sm:text-[12px] md:text-[14px] lg:text-[18px] uppercase hover:brightness-90"
              >
                Uzyskaj Pomoc
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
