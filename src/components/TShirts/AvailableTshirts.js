import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableTshirts.module.css";
import Tshirt from "./Tshirt/Tshirt";
import AddTshirt from "./AddTshirt";

export const DUMMY_TSHIRTS = [
  {
    id: Math.random(),
    name: "Navi Blue",
    description: "100% cotton",
    price: 700,
  },
  {
    id: Math.random(),
    name: "Yellow redTape",
    description: "100% cotton and easy to wash",
    price: 500,
  },
  {
    id: Math.random(),
    name: "Dark green Armani",
    description: "Full Sleeves",
    price: 1299,
  },
  {
    id: Math.random(),
    name: "Zara",
    description: "100% cotton and full sleeve",
    price: 1899,
  },
];

const AvailableTshirts = () => {
  const [Tshirts, setTshirts] = useState(DUMMY_TSHIRTS); // Initialize with DUMMY_TSHIRTS

  const addTshirt = (newTshirt) => {
    setTshirts((prevTshirts) => {
      return [newTshirt, ...prevTshirts];
    });
  };

  const TshirtList = Tshirts.map((tshirt) => (
    <Tshirt
      id={tshirt.id}
      key={tshirt.id}
      name={tshirt.name}
      description={tshirt.description}
      price={tshirt.price}
    />
  ));

  return (
    <>
      <AddTshirt onAddTshirt={addTshirt} />
      <section className={classes.Tshirts}>
        <Card>
          <ul>{TshirtList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableTshirts;
