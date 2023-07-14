import React from "react";
import "./styles.css";
import Dish from "../models/Dish";

interface EditDishFormProp {
  data: Dish;
  updateDish: (newDish: Dish) => void;
  hangleToggleEdit: () => void;
}

const EditDishForm: React.FC<EditDishFormProp> = ({
  data,
  updateDish,
  hangleToggleEdit,
}) => {
  const [editDish, setEditDish] = React.useState<Dish>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditDish({ ...editDish, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, image, description } = editDish;
    if (title && price && image && description) {
      updateDish(editDish);
      hangleToggleEdit();
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={editDish.title}
        maxLength={100}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={editDish.price}
        maxLength={5}
      />
      <input
        name="image"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={editDish.image}
      />
      <input
        name="description"
        type="text"
        placeholder="Description"
        onChange={handleChange}
        maxLength={220}
        value={editDish.description}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default EditDishForm;
