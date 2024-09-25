import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";

/* eslint-disable react/no-unknown-property */
const AllfoodSection = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("dataset.json");
        setFoods(response.data);
      } catch (error) {
        alert.error(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <a href="#" className="font-semibold inline-block">
              Food Categories
            </a>
          </div>
          <a href="#">See All</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {foods.map((eachFood, idx) => (
            <FoodCard key={idx} eachFood={eachFood} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllfoodSection;
