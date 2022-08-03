import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Food_Main } from "./Components/RestaurantPage/Food_Main";
import { Food_Detail } from "./Components/RestaurantPage/Food_Detail";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Food_Main  />} />
   
        /* <Route path="/:food/:id" element={<Food_Detail />} /> */
   
     
      </Routes>
    </>
  );
}

export default App;
