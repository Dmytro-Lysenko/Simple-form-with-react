import React from "react";
import Card from "../UI/Card";
import classes from './ItemsList.module.css'
import Button from '../UI/Button'


const ItemsList = (props) => {
  return (
    <Card className={classes.newItems}>
      <ul>
        {props.newItems.map((newItem) => (
          <li key={newItem.id} onClick={props.testClose}>
            {newItem.name} (buy {newItem.item} for {newItem.price} $)
            <Button onClicking={props.testClose}>Close</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ItemsList;
