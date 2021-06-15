import React from "react";
import Card from "../UI/Card";
import classes from './ItemsList.module.css'


const ItemsList = (props) => {
  return (
    <Card className={classes.newItems}>
      <ul>
        {props.newItems.map((newItem) => (
          <li key={newItem.id}>
            {newItem.name} (buy {newItem.item} on {newItem.price})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ItemsList;
