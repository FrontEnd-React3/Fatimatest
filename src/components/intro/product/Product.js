import React from "react";
import "./Product.css";
//import "../../../Data";
function Product({ img, link }) {
  console.log(img);
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle">
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
