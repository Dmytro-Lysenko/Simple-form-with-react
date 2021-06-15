import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddItem.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddItem = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [error, setError] = useState();

  const addNewItemHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredItem.trim().length === 0 ||
      enteredPrice.trim().length === 0
    ) {
      setError({
        title: "Invalid input3",
        message: "Please enter valid name and item",
      });
      return;
    }
    if (+enteredPrice < 1) {
      setError({
        title: "Invalid price",
        message: "Please enter valid price of item",
      });
      return;
    }
    props.onAddItem(enteredUserName, enteredItem, enteredPrice);
    setEnteredUserName("");
    setEnteredItem("");
    setEnteredPrice("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addNewItemHandler}>
          <h3 className={classes.title}>Please fill the form</h3>
          <label htmlFor="username">Your Name</label>
          <input
            value={enteredUserName}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="item">Item to buy</label>
          <input
            value={enteredItem}
            id="item"
            type="text"
            onChange={itemChangeHandler}
          ></input>
          <label htmlFor="price">The price of item</label>
          <input
            value={enteredPrice}
            id="price"
            type="number"
            onChange={priceChangeHandler}
          ></input>
          <Button type="submit">Buy item</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddItem;
