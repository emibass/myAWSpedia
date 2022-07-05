import React from "react";
import Category from "../components/Category";
import awspediaCategories from "../Services/awspediaCategories";

function createEntry(category) {
    return (
      <Category
        key={category.id}
        icon={category.icon}
        name={category.name}
      />
    );
  }

  function Home (){

    return(
        <div>
        <h1>
         <span>my AWSpedia</span>
        </h1>
        <h2>Explore Top Product Categories </h2>
        <dl className="dictionary">{awspediaCategories.map(createEntry)}</dl>
      </div>
    )
  }

  export default Home;