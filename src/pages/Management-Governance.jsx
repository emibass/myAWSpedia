import React from "react";
import awsManagement from "../Services/awsManagement";
import ManagementEntry from "../components/ManagementEntry";

function createEntry(entry) {
    return (
      <ManagementEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function Management(){
    return(
        <div>
        <h1>
          <span>Management and Governance</span>
        </h1>
        <h2>Some of the AWS Management and Governance Services</h2>
        <dl className="dictionary">{awsManagement.map(createEntry)}</dl>
      </div>
        
    )
}

export default Management;