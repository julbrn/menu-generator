import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Dish from "../models/Dish";

interface DishCardProp {
  dish: Dish;
}

const DishCard: React.FC<DishCardProp> = ({ dish }) => {
  return (
    <div className="dish">
      <img src={dish.image} alt={dish.title} />
      <div className="dish__info">
        <div className="dish__heading">
          <h2>{dish.title}</h2>
          <span>{dish.price}&nbsp;₸</span>
        </div>
        <p className="dish__description">{dish.description}</p>
        <div className="dish__controls">
          <AiFillEdit />
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
};

export default DishCard;
