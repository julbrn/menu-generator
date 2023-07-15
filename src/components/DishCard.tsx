import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Dish from "../models/Dish";
import EditDishForm from "./EditDishForm";

interface DishCardProp {
  dish: Dish;
  updateDish: (newDish: Dish) => void;
  deleteDish: (id: number) => void;
}

const DishCard: React.FC<DishCardProp> = ({ dish, updateDish, deleteDish }) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const hangleToggleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = () => {
    deleteDish(dish.id);
  };
  return (
    <div className="dish">
      <img src={dish.image} alt={dish.title} />
      <div className="dish__info">
        <div className="dish__heading">
          <h2>{dish.title}</h2>
          <span className="dish__price">{dish.price}&nbsp;₸</span>
        </div>
        <p className="dish__description">{dish.description}</p>
        <div className="dish__controls">
          <AiFillEdit onClick={hangleToggleEdit} className="button-icon" />
          <AiFillDelete onClick={handleDelete} className="button-icon" />
        </div>
      </div>
      {edit ? (
        <EditDishForm
          data={dish}
          updateDish={updateDish}
          hangleToggleEdit={hangleToggleEdit}
        />
      ) : null}
    </div>
  );
};

export default DishCard;
