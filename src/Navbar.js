import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from "./Navbar.module.css";
import { menu } from "./Data";

const Navbar = () => {
  const [item, setItems] = useState(menu);

  const filteritem = (categItem) => {
    const updatedItem = menu.filter((curele) => {
      return curele.category === categItem;
    });
    setItems(updatedItem);
  };
  return (
    <div className={classes.maincontainer}>
      <div className={classes.menunav}>
        <button onClick={() => setItems(menu)}> All</button>
        <button onClick={() => filteritem("Breakfast")}> Breakfast</button>
        <button onClick={() => filteritem("Lunch")}> Lunch</button>
        <button onClick={() => filteritem("EveningSnacks")}> Evening</button>
        <button onClick={() => filteritem("Dinner")}> Dinner</button>
      </div>
      <div className={classes.wrapper}>
        {item.map((items) => {
          return (
            <div className={classes.card_container}>
              <div className={classes.id}>{items.id}</div>
              <div className={classes.category}>{items.category}</div>
              <div className={classes.imgcontainer}>
                <img className={classes.img} src={items.image} />
              </div>
              <div className={classes.name}>{items.name}</div>
              <div className={classes.price}>Price {items.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
