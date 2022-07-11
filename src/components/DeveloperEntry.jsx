import React from "react";


function DeveloperEntry(props) {
  return (

    <div className="term">
      <dt>
      <a href={props.more}>
        <img 
        className="emoji"
        aria-label="icon"
        src={`../assets/Architecture-Service-Icons_04302022/Arch_Developer-Tools/64/Arch_${props.icon}.png`}>
        </img></a>
        <span>{props.name}</span>
        <p>{props.description}</p>
        <a href={props.more}>more...</a>
      </dt>
    </div>
  );
}

export default DeveloperEntry;