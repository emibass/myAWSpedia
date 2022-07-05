import React from "react";
import {Link} from "react-router-dom"

function Category(props) {
  return (

    <div className="term">
      <dt>
      <Link to = {`../${props.name}`}>
        <img 
        className="emoji"
        aria-label="icon"
        src={`../assets/Category-Icons_04302022/Arch-Category_64/Arch-Category_${props.icon}.png`}>
        </img>
        <span>{props.name}</span>
        </Link>
      </dt>
    </div>
  );
}

export default Category;
