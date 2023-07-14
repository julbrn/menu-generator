import React, { useEffect, useState } from "react";
import "./App.css";
import AddDishForm from "./components/AddDishForm";
import DisplayDishes from "./components/DisplayDishes";
import Dish from "./models/Dish";
import demoDishes from "./demoDishes";

const App: React.FC = () => {
  const [dishesList, setDishesList] = useState<Dish[]>([]);
  useEffect(() => {
    let savedDishes = localStorage.getItem("savedDishes");
    if (savedDishes) {
      setDishesList(JSON.parse(savedDishes));
    } else setDishesList(demoDishes);
  }, []);

  useEffect(() => {
    if (dishesList.length > 0) {
      localStorage.setItem("savedDishes", JSON.stringify(dishesList));
    }
  }, [dishesList]);

  const addDish = (newDish: Dish) => {
    setDishesList([newDish, ...dishesList]);
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
