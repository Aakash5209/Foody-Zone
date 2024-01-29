import React, { useState } from "react";

import "./app.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Card } from "./components/Card/Card";
import data from "./data.js";

function App() {
  const [item, setItem] = useState(data);

  // const SearchEle = document.getElementById("searchItem");
  // console.log(SearchEle.value);
  // const SearchFilter = (SearchEle) => {
  //   const updateItem = data.filter((SearchEle) => {
  //     return SearchEle.category === "Aniversary";
  //   });
  //   setItem(updateItem);
  // };

  const filterAll = () => {
    setItem(data);
  };
  const filterAniver = (Aniversary) => {
    //creating an new array of object which have filtered output
    const updateItem = data.filter((currElement) => {
      return currElement.category === "Aniversary";
    });
    setItem(updateItem);
  };

  const filterBirth = (Birthday) => {
    const updateItem = data.filter((currElement) => {
      return currElement.category === "Birthday";
    });
    setItem(updateItem);
  };

  const filterPro = (Program) => {
    const updateItem = data.filter((currElement) => {
      return currElement.category === "Program";
    });
    //update the state
    setItem(updateItem);
  };
  return (
    <>
      <Navbar
        fxnAll={filterAll}
        fxnAni={filterAniver}
        fxnBir={filterBirth}
        fxnPro={filterPro}
      />

      <div className="sub_container">
        <div className="card_box">
          {item.map((iter) => {
            return <Card title={iter.title} img={iter.img} />;
          })}
        </div>
      </div>
    </>
  );
}
export default App;
