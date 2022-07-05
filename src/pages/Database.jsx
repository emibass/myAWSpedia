import React from "react";
import awsDatabase from "../Services/awsDatabase";
import DatabaseEntry from "../components/DatabaseEntry";

function createEntry(entry) {
    return (
      <DatabaseEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function Database(){
    return(
        <div>
        <h1>
          <span>Database</span>
        </h1>
        <h2>Some of the AWS Database Services</h2>
        <dl className="dictionary">{awsDatabase.map(createEntry)}</dl>
      </div>
        
    )
}

export default Database;