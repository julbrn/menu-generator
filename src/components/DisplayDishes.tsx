import React from "react";
import Dish from "../models/Dish";
import DishCard from "./DishCard";

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
  return (
    <div className="container">
      {dishesList.map((dish) => {
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
  );
};

export default DisplayDishes;
