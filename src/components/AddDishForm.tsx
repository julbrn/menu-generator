import React from "react";
import "./styles.css";
import Dish from "../models/Dish";
import useInput from "../hooks/useInput";

interface AddDishFormProp {
  addDish: (newDish: Dish) => void;
}

const AddDishForm: React.FC<AddDishFormProp> = ({ addDish }) => {
  const title = useInput("", { isEmpty: true, minLength: 3 });
  const price = useInput("", { isEmpty: true });
  const image = useInput("", { isEmpty: true, isUrl: true });
  const description = useInput("", { isEmpty: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    addDish({
      title: title.value,
      price: Number(price.value),
      image: image.value,
      id: Date.now(),
      description: description.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input__wrapper input__wrapper_title">
        <input
          name="title"
          type="text"
          value={title.value}
          placeholder="Name"
          onChange={(e) => title.onChange(e)}
          maxLength={100}
        />
      </div>
      <div className="input__wrapper input__wrapper_price">
        <input
          name="price"
          type="string"
          value={price.value}
          placeholder="Price"
          onChange={(e) => price.onChange(e)}
          onBlur={(e) => price.onBlur(e)}
          maxLength={5}
        />
      </div>
      <div className="input__wrapper input__wrapper_link">
        <input
          name="image"
          type="url"
          value={image.value}
          placeholder="Image link"
          onChange={(e) => image.onChange(e)}
          onBlur={(e) => image.onBlur(e)}
        />
        {image.isDirty && image.isEmpty && (
          <span className="input__error">Field cannot be empty</span>
        )}
        {image.isDirty && !image.isEmpty && image.urlError && (
          <span className="input__error">Wrong link format</span>
        )}
      </div>
      <div className="input__wrapper input__wrapper_description">
        <input
          name="description"
          type="text"
          value={description.value}
          placeholder="Description"
          onChange={(e) => description.onChange(e)}
          maxLength={220}
        />
      </div>
      <button
        disabled={
          !title.inputValid ||
          !price.inputValid ||
          !image.inputValid ||
          !description.inputValid
        }
        type="submit"
      >
        + Add to the menu
      </button>
    </form>
  );
};

export default AddDishForm;
