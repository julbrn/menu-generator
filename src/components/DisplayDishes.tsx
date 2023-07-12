import React from "react";
import Dish from "../models/Dish";
import DishCard from "./DishCard";

interface DisplayDishesProps {
  dishesList: Dish[];
}

const DisplayDishes: React.FC<DisplayDishesProps> = ({ dishesList }) => {
  return (
    <div className="container">
      {dishesList.map((dish) => {
        return <DishCard key={dish.id} dish={dish} />;
      })}
    </div>
  );
};

export default DisplayDishes;
