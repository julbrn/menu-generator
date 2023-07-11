import React from "react";
import "./styles.css";
import Dish from "../models/Dish";

interface AddDishFormProp {
  addDish: (newDish: Dish) => void;
}

const AddDishForm: React.FC<AddDishFormProp> = ({ addDish }) => {
  const [newDish, setNewDish] = React.useState<{
    title: string;
    price: string;
    image: string;
  }>({
    title: "",
    price: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewDish({ ...newDish, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, image } = newDish;
    if (title && price && image) {
      addDish({
        title,
        price: Number(price),
        image,
        id: Date.now(),
      });
      setNewDish({ title: "", price: "", image: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={newDish.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={newDish.price}
      />
      <input
        name="image"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={newDish.image}
      />
      <button type="submit">+ Add to the menu</button>
    </form>
  );
};

export default AddDishForm;
