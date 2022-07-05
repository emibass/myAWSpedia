import React from "react";
import awsSecurity from "../Services/awsSecurity";
import SecurityEntry from "../components/SecurityEntry";

function createEntry(entry) {
    return (
      <SecurityEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function Security(){
    return(
        <div>
        <h1>
          <span>Security, Identity & Compliance</span>
        </h1>
        <h2>Some of the AWS Security, Identity and Compliance Services</h2>
        <dl className="dictionary">{awsSecurity.map(createEntry)}</dl>
      </div>
        
    )
}

export default Security;