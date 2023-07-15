import React from "react";
import "./styles.css";
import Dish from "../models/Dish";
import useInput from "../hooks/useInput";

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
  const title = useInput(data.title, { isEmpty: false });
  const price = useInput(data.price, { isEmpty: false, isNumber: true });
  const image = useInput(data.image, { isEmpty: false, isUrl: true });
  const description = useInput(data.description, { isEmpty: false });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateDish({
      title: title.value,
      price: price.value,
      image: image.value,
      id: data.id,
      description: description.value,
    });
    hangleToggleEdit();
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <div className="input__wrapper input__wrapper_title">
        <input
          name="title"
          type="text"
          placeholder="Name"
          value={title.value}
          onChange={(e) => title.onChange(e)}
          onBlur={(e) => title.onBlur(e)}
          maxLength={100}
        />
        {title.isDirty && title.isEmpty && (
          <span className="input__error">Please fill in this field</span>
        )}
      </div>
      <div className="input__wrapper input__wrapper_price">
        <input
          name="price"
          type="text"
          placeholder="Price"
          value={price.value}
          onChange={(e) => price.onChange(e)}
          onBlur={(e) => price.onBlur(e)}
          maxLength={5}
        />
        {price.isDirty && price.isEmpty && (
          <span className="input__error">Please fill in this field</span>
        )}
        {price.isDirty && !price.isEmpty && price.numberError && (
          <span className="input__error">Only digits are accepted</span>
        )}
      </div>
      <div className="input__wrapper input__wrapper_link">
        <input
          name="image"
          type="url"
          placeholder="Image"
          value={image.value}
          onChange={(e) => image.onChange(e)}
          onBlur={(e) => image.onBlur(e)}
        />
        {image.isDirty && image.isEmpty && (
          <span className="input__error">Please fill in this field</span>
        )}
        {image.isDirty && !image.isEmpty && image.urlError && (
          <span className="input__error">Wrong link format</span>
        )}
      </div>
      <div className="input__wrapper input__wrapper_description">
        <input
          name="description"
          type="text"
          placeholder="Description"
          onChange={(e) => description.onChange(e)}
          onBlur={(e) => description.onBlur(e)}
          maxLength={220}
          value={description.value}
        />
        {description.isDirty && description.isEmpty && (
          <span className="input__error">Please fill in this field</span>
        )}
      </div>

      <button
        type="submit"
        disabled={
          !title.inputValid ||
          !price.inputValid ||
          !image.inputValid ||
          !description.inputValid
        }
      >
        Confirm
      </button>
    </form>
  );
};

export default EditDishForm;
