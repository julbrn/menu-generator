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
    description: string;
  }>({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewDish({ ...newDish, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, image, description } = newDish;
    if (title && price && image) {
      addDish({
        title,
        price: Number(price),
        image,
        id: Date.now(),
        description,
      });
      setNewDish({ title: "", price: "", image: "", description: "" });
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
        maxLength={100}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={newDish.price}
        maxLength={5}
      />
      <input
        name="image"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={newDish.image}
      />
      <input
        name="description"
        type="text"
        placeholder="Description"
        onChange={handleChange}
        maxLength={220}
        value={newDish.description}
      />
      <button type="submit">+ Add to the menu</button>
    </form>
  );
};

export default AddDishForm;
