import React from "react";
import "./App.css";
import AddDishForm from "./components/AddDishForm";
import DisplayDishes from "./components/DisplayDishes";
import Dish from "./models/Dish";

const App: React.FC = () => {
  const [dishesList, setDishesList] = React.useState<Dish[]>([]);

  const addDish = (newDish: Dish) => {
    setDishesList([...dishesList, newDish]);
  };

  const deleteDish = (id: number) => {
    const newDishesList = dishesList.filter((dish) => dish.id !== id);
    setDishesList(newDishesList);
  };

  const updateDish = (newDish: Dish) => {
    setDishesList(
      dishesList.map((dish) => (dish.id === newDish.id ? newDish : dish))
    );
  };

  console.log(dishesList);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Menu Generator</span>
        <AddDishForm addDish={addDish} />
        <DisplayDishes
          dishesList={dishesList}
          updateDish={updateDish}
          deleteDish={deleteDish}
        />
      </div>
    </div>
  );
};

export default App;
