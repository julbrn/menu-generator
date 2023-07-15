import React, { useState } from "react";
import Dish from "../models/Dish";
import DishCard from "./DishCard";
import Pagination from "./Pagination";

interface DisplayDishesProps {
  dishesList: Dish[];
  updateDish: (newDish: Dish) => void;
  deleteDish: (id: number) => void;
}

const DisplayDishes: React.FC<DisplayDishesProps> = ({
  dishesList,
  updateDish,
  deleteDish,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dishesPerPage: number = 2;
  const lastDishIndex = currentPage * dishesPerPage;
  const firstDishIndex = lastDishIndex - dishesPerPage;
  const currentDishes = dishesList.slice(firstDishIndex, lastDishIndex);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const goToNextPage = () => setCurrentPage((prev) => prev + 1);
  const goToPrevPage = () => setCurrentPage((prev) => prev - 1);
  return (
    <>
      <div className="container">
        {currentDishes.map((dish) => {
          return (
            <DishCard
              key={dish.id}
              dish={dish}
              updateDish={updateDish}
              deleteDish={deleteDish}
            />
          );
        })}
      </div>
      <Pagination
        dishesPerPage={dishesPerPage}
        totalDishes={dishesList.length}
        currentPage={currentPage}
        paginate={paginate}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
      ></Pagination>
    </>
  );
};

export default DisplayDishes;
