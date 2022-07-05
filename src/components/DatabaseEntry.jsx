import React from "react";


function DatabaseEntry(props) {
  return (

    <div className="term">
      <dt>
        <img 
        className="emoji"
        aria-label="icon"
        src={`../assets/Architecture-Service-Icons_04302022/Arch_Database/64/Arch_${props.icon}.png`}>
        </img>
        <span>{props.name}</span>
        <p>{props.description}</p>
        <a href={props.more}>more...</a>
      </dt>
    </div>
  );
}

export default DatabaseEntry;