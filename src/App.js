import React, { useState } from "react";
import classes from "./App.module.css";
import AddItem from "./components/Users/AddItem";
import ItemsList from "./components/Users/ItemsList";

const App = (props) => {
  const [itemsList, setItemsList] = useState([]);

  const addItemHandler = (iName, iItem, iPrice) => {
    setItemsList((prevItemsList) => {
      return [
        ...prevItemsList,
        {
          name: iName,
          item: iItem,
          price: iPrice,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <h2 className={classes.title}>This is testing form</h2>
      <AddItem onAddItem={addItemHandler} />
      <ItemsList newItems={itemsList} />
    </div>
  );
};

export default App;
