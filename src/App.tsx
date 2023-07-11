import React from "react";
import "./App.css";
import AddDishForm from "./components/AddDishForm";
import Dish from "./models/Dish";

const App: React.FC = () => {
  const [dishesList, setDishesList] = React.useState<Dish[]>([]);

  const addDish = (newDish: Dish) => {
    setDishesList([...dishesList, newDish]);
  };

  console.log(dishesList);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Menu Generator</span>
        <AddDishForm addDish={addDish} />
      </div>
    </div>
  );
};

export default App;
