import React from "react";
import img from "../assets/download.jpg";
import "./style/index.css";
export default function Cart() {
  return (
    <>
      <div className="cart">
        <img src={img} alt="" />
        <h3>san francisco</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ipsa
          assumenda velit consequatur molestiae est non ducimus corrupti ea
          illo.
        </p>
        <button>deteils</button>
      </div>
    </>
  );
}
