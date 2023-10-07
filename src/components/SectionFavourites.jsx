import React, { useState } from "react";

const SectionFavourites = () => {
  const [openRecipes, setOpenRecipes] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <div className="py-3 w-screen sm:px-4 lg:px-[350px] sm:text-[12px] md:text-[14px] flex justify-start gap-[20px] border-b-[1px] border-greay-300">
        <h1
          onClick={() => setOpenRecipes(true)}
          className={`relative before:absolute before:bottom-[-12px] before:left-0 before:h-[3px] before:w-[100%] hover:before:bg-litegreen ${
            openRecipes ? "font-semibold before:bg-litegreen" : "font-normal"
          } cursor-pointer`}
        >
          Polecane
        </h1>
        <h1
          onClick={() => setOpenRecipes(false)}
          className={`relative before:absolute before:bottom-[-12px] before:left-0 before:h-[3px] before:w-[100%] hover:before:bg-litegreen ${
            openRecipes ? "font-normal" : "font-semibold before:bg-litegreen"
          } cursor-pointer`}
        >
          Artykuły
        </h1>
      </div>
      {openRecipes ? (
        <div className="flex items-center flex-col pt-[25px] text-green font-semibold">
          <div className="sm:w-screen sm:px-4 md:px-8 lg:px-[350px]">
            <h1 className="sm:text-[14px] md:text-[16px] lg:text-[20px] font-bold mb-4">
              Najnowsze przepisy!
            </h1>
          </div>
          <div className="mt-2 md:w-[950px] sm:w-screen lg:w-[1210px] gap-6 flex sm:flex-col lg:flex-row items-center">
            <div className="sm:w-[60%] md:w-[40%] lg:w-[50%] md:text-center text-[15px] border-[1px] border-gray-200 rounded-lg hover:shadow-xl duration-200 cursor-pointer">
              <img
                className="w-full"
                src="https://assets.tmecosys.com/image/upload/t_web276x230_webp/img/recipe/ras/Assets/b6825b3360fdd783a46c566760208a04/Derivates/79f056d81621cd36e777361c4a35b10f9839f5e7"
                alt="recipe1"
              />
              <h1 className="px-[25px] py-4">Kanapki z burgerem i chedarem</h1>
            </div>
            <div className="sm:w-[60%] md:w-[40%] lg:w-[50%] md:text-center lg:text-left text-[15px] border-[1px] border-gray-200 rounded-lg hover:shadow-xl duration-200 cursor-pointer">
              <img
                className="w-full"
                src="https://assets.tmecosys.com/image/upload/t_web276x230_webp/img/recipe/ras/Assets/25928f798ec104e13da27c031f79105c/Derivates/da43568dae9f3e9e53bb8bcd3b39cad5fd6bce7c"
                alt="recipe2"
              />
              <h1 className="px-[25px] py-4">
                Bułeczki ze śliwkami i sosem śliwkowym
              </h1>
            </div>
            <div className="sm:w-[60%] md:w-[40%] lg:w-[50%] md:text-center text-[15px] border-[1px] border-gray-200 rounded-lg hover:shadow-xl duration-200 cursor-pointer">
              <img
                className="w-full"
                src="https://assets.tmecosys.com/image/upload/t_web276x230_webp/img/recipe/ras/Assets/01c5c3efd4646d9b2470ca29685fdbd2/Derivates/e25da1bff7e3f93ee764b275e571316faea655ef"
                alt="recipe3"
              />
              <h1 className="px-[25px] py-4">
                Konfitura z zielonych pomidorów
              </h1>
            </div>
            <div className="sm:w-[60%] md:w-[40%] lg:w-[50%] md:text-center text-[15px] border-[1px] border-gray-200 rounded-lg hover:shadow-xl duration-200 cursor-pointer">
              <img
                className="w-full"
                src="https://assets.tmecosys.com/image/upload/t_web276x230_webp/img/recipe/ras/Assets/4030f4fd-651f-4ebe-9744-dec0c659ba6c/Derivates/c7fa23a4-8fd3-4671-95d0-642a05b5090c"
                alt="recipe4"
              />
              <h1 className="px-[25px] py-4">Tarta z gruszkami i serem brie</h1>
            </div>
          </div>
          <div className="h-[450px] w-screen text-[15px] md:w-[140vw] flex flex-col items-center justify-center mt-16 bg-cover relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-dark mix-blend-darken shadow-md  bg-[url('https://assets.tmecosys.com/image/upload/t_web1440x450@2x/cdn/contentful/4RcBqZuFZKSu8qci2sWigS/0fa487d8f59211d842872765b7df7792/Recipes_Pattern_Small.jpg')] ">
            <div className="absolute w-screen flex flex-col items-center justify-center gap-4 text-white 2xl:px-[600px] md:px-0">
              <h1 className="2xl:text-[50px] xl:text-[42px] md:text-[38px] text-center w-full">
                Wszystkie przepisy
              </h1>
              <p className="text-[10px] 2xl:text-[25px] xl:text-[12px] text-center sm:hidden xl:block">
                Poznaj przepisy z funkcją gotowania z ustawieniami, opracowane i
                sprawdzone przez naszych kulinarnych specjalistów.
              </p>
              <a
                href="/recipes"
                className="hover:bg-hovered py-[12px] px-[15px] sm:text-[12px] md:text-[14px] bg-white text-green rounded-md uppercase"
              >
                Zobacz
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <div className="w-screen flex items-center flex-col pt-[35px] text-green">
            <div className="sm:ml-12 sm:w-[400px] md:w-[850px] lg:w-[1200px] text-green ">
              <h1 className="sm:text-[16px] md:text-[20px] lg:text-[25px] font-bold mb-4">
                Nasze artykuły tematyczne
              </h1>
              <div>
                <div className="flex sm:flex-col md:flex-row gap-4">
                  <div className="sm:ml-1 sm:w-[340px] md:w-[700px] pb-[85px] flex flex-col items-center justify-center rounded-lg border-[1px] overflow-hidden">
                    <img
                      className="object-cover w-full"
                      src="https://assets.tmecosys.com/image/upload/t_web640/cdn/contentful/5Uyp2UPmssDOGNYc23ZXw9/65dba2e1fef61eae71a53002410a2278/1280_960_-_AR_-_Take_out_the_takeout_-_Image_1.jpg"
                      alt="thermomix"
                    />
                    <h1 className="font-semibold sm:text-[16px] md:text-[20px] lg:text-[25px] px-[58px] line-clamp-2 mt-10">
                      Koniec z jedzeniem na wynos: 10 wskazówek, jak gotować
                      łatwiej, szybciej i zdrowiej
                    </h1>
                    <p className="mt-4 ">
                      Nawet gdy życie toczy się w zawrotnym tempie i wydaje się,
                      że brak Ci czasu i siły na gotowanie, możesz podać swoim
                      bliskim pożywny posiłek. Oto 10 wskazówek, które pomogą Ci
                      gotować łatwiej, szybciej i zdrowiej oraz sprawią, że w
                      kilka chwil wyczarujesz znakomite dania.
                    </p>
                    <div className="w-full mt-20 pl-[60px]">
                      <a
                        href="/"
                        className="py-2 px-4 text-litegreen uppercase font-semibold border-2 border-litegreen hover:brightness-75 rounded-md"
                      >
                        Czytaj Więcej
                      </a>
                    </div>
                  </div>
                  <div className="w-[670px] flex flex-col gap-2 rounded-md text-[20px] text-green font-semibold ">
                    <div className="h-[180px] flex items-center border-[1px] rounded-lg hover:shadow-lg cursor-pointer duration-200">
                      <div
                        className={`h-full sm:w-[25%] md:w-[45%] lg:w-[40%] bg-cover rounded-md bg-[url("https://assets.tmecosys.com/image/upload/t_web640x320/cdn/contentful/55ayeIUXSk0506cmq6fOHE/b60de5ce3de1f67a4098d43f13162123/int_thermomix_TM6-refresh_close-up_49_medium.jpg")]`}
                      ></div>
                      <div className="h-full sm:w-[20%] md:w-[45%] lg:w-[60%] grid place-items-center">
                        <h1 className="sm:pl-[10px] lg:pl-[20px] line-clamp-2 sm:text-[12px] md:text-[14px] lg:text-[16px]">
                          Korzystaj z zalet Cookidoo dzięki abonamentowi!
                        </h1>
                      </div>
                    </div>
                    <div className="h-[180px] flex items-center border-[1px] rounded-lg hover:shadow-lg cursor-pointer duration-200">
                      <div
                        className={`h-full sm:w-[25%] md:w-[45%] lg:w-[40%]  bg-cover rounded-md bg-[url("https://assets.tmecosys.com/image/upload/t_web640x320/cdn/contentful/4FFbJjAA2aUHpJxO2zJfX9/979cdc9af39739c91c6dc064a39631d3/simple-gnocchi-with-courgettes-775602.jpg")]`}
                      ></div>
                      <div className="h-full sm:w-[20%] lg:w-[60%] grid place-items-center">
                        <h1 className="pl-[20px] line-clamp-2 sm:text-[12px] md:text-[14px] lg:text-[16px]">
                          Rekomendacje przepisów dopasowane do Ciebie
                        </h1>
                      </div>
                    </div>
                    <div className="h-[180px] flex items-center border-[1px] rounded-lg hover:shadow-lg cursor-pointer duration-200">
                      <div
                        className={`h-full sm:w-[25%] md:w-[45%] lg:w-[40%]  bg-cover rounded-md bg-[url("https://assets.tmecosys.com/image/upload/t_web640x320/cdn/contentful/8WkYzyKzhitjtqMcp3Viv/73f7aa9bb1bfa43de96085f6241b1c8d/int_thermomix_cutter-TM6_product-launch_0696_medium.jpg")]`}
                      ></div>
                      <div className="h-full sm:w-[20%] lg:w-[60%] grid place-items-center">
                        <h1 className="pl-[20px] line-clamp-2 sm:text-[12px] md:text-[14px] lg:text-[16px]">
                          Tajemnice sukcesu gotowania z nakładką krojącą
                          Thermomix®
                        </h1>
                      </div>
                    </div>
                    <div className="h-[180px] flex items-center border-[1px] rounded-lg hover:shadow-lg cursor-pointer duration-200">
                      <div
                        className={`h-full sm:w-[25%] md:w-[45%] lg:w-[40%]  bg-cover rounded-md bg-[url("https://assets.tmecosys.com/image/upload/t_web640x320/cdn/contentful/1bBJ6NgfuJBS8fxl4iyceS/8c73a560c57924aa0fe49f8520439fa6/03_thumb_m.jpg")]`}
                      ></div>
                      <div className="h-full sm:w-[20%] lg:w-[60%] grid place-items-center">
                        <h1 className="pl-[20px] line-clamp-2 sm:text-[12px] md:text-[14px] lg:text-[16px]">
                          Zmiana liczby porcji: Wskazówki pozwalające uzyskać
                          doskonałe rezultaty
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[450px] w-screen text-[15px] md:w-[140vw] flex flex-col items-center justify-center mt-16 bg-cover relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-dark mix-blend-darken shadow-md  bg-[url('https://assets.tmecosys.com/image/upload/t_web1440x450@2x/cdn/contentful/4RcBqZuFZKSu8qci2sWigS/0fa487d8f59211d842872765b7df7792/Recipes_Pattern_Small.jpg')] ">
              <div className="absolute w-screen flex flex-col items-center justify-center gap-4 text-white 2xl:px-[600px] md:px-0">
                <h1 className="2xl:text-[50px] xl:text-[42px] md:text-[38px] text-center w-full">
                  Wszystkie przepisy
                </h1>
                <p className="text-[10px] 2xl:text-[25px] xl:text-[12px] text-center sm:hidden xl:block">
                  Poznaj przepisy z funkcją gotowania z ustawieniami, opracowane
                  i sprawdzone przez naszych kulinarnych specjalistów.
                </p>
                <a
                  href="/recipes"
                  className="hover:bg-hovered py-[12px] px-[15px] sm:text-[12px] md:text-[14px] bg-white text-green rounded-md uppercase"
                >
                  Zobacz
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionFavourites;
