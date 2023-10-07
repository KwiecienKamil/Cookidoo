import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import MenuItem from "../components/MenuItem";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
    })
      .then((res) => {
        setData(res.data.meals);
      })
      .catch((e) => console.log(e));
  }, []);

  const filterType = () => {
    axios({
      method: "GET",
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    })
      .then((res) => {
        setData(res.data.meals);
      })
      .catch((e) => console.log(e));
  };

  const refreshMenu = () => {
    axios({
      method: "GET",
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=b`,
    })
      .then((res) => {
        setData(res.data.meals);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="mt-[80px] flex justify-center">
      <div className="h-screen sm:w-[400px] md:w-[900px] lg:w-[1200px] pt-8 flex flex-col">
        <div className="w-full flex items-center justify-start gap-2 border-[1px] p-2 rounded-sm shadow-md">
          <div className="h-[50px] sm:w-[20%] lg:w-[10%] border-r-[1px] grid place-items-center">
            <h1 className="sm:text-[10px] md:text-[12px] lg:text-[16px]">
              Przepisy
            </h1>
          </div>
          <div className="flex items-center">
            <BiSearchAlt2 className="sm:text-[12px] lg:text-[20px] m-4 text-litegreen" />
            <input
              type="text"
              className="h-[60px] text-[20px] sm:w-[100px] lg:w-[700px] ml-2 focus:outline-none sm:text-[9px] md:text-[12px] lg:text-[16px]"
              placeholder="Szukaj w Cookidoo"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onClick={refreshMenu}
            />
          </div>
          <button
            onClick={filterType}
            type="button"
            className="ml-auto mr-2 px-4 py-2 bg-litegreen rounded-md text-white sm:text-[10px] md:text-[12px] lg:text-[20px] font-semibold hover:brightness-[90%]"
          >
            Szukaj
          </button>
        </div>
        <div className="sm:ml-[50px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => {
            return (
              <MenuItem
                key={item.id}
                img={item.strMealThumb}
                title={item.strMeal}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
