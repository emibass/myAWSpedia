import React from "react";
import awsCompute from "../Services/awsCompute";
import ComputeEntry from "../components/ComputeEntry";

function createEntry(entry) {
    return (
      <ComputeEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function Compute(){
    return(
        <div>
        <h1>
          <span>Compute</span>
        </h1>
        <h2>Some of the AWS Compute Services</h2>
        <dl className="dictionary">{awsCompute.map(createEntry)}</dl>
      </div>
        
    )
}

export default Compute;