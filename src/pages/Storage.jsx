import React from "react";
import awsStorage from "../Services/awsStorage";
import StorageEntry from "../components/StorageEntry";

function createEntry(entry) {
    return (
      <StorageEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function Storage(){
    return(
        <div>
        <h1>
          <span>Storage</span>
        </h1>
        <h2>Some of the AWS Storage Services</h2>
        <dl className="dictionary">{awsStorage.map(createEntry)}</dl>
      </div>
        
    )
}

export default Storage;