import React from "react";
import awsDeveloper from "../Services/awsDeveloper";
import DeveloperEntry from "../components/DeveloperEntry";

function createEntry(entry) {
    return (
      <DeveloperEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function Developer(){
    return(
        <div>
        <h1>
          <span>Developer Tools</span>
        </h1>
        <h2>Some of the AWS Developer Tools Services</h2>
        <dl className="dictionary">{awsDeveloper.map(createEntry)}</dl>
      </div>
        
    )
}

export default Developer;