import React from "react";
import awsMachineLearning from "../Services/awsMachineLearning";
import MachineLearningEntry from "../components/MachineLearningEntry";

function createEntry(entry) {
    return (
      <MachineLearningEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function MachineLearning(){
    return(
        <div>
        <h1>
          <span>Machine Learning</span>
        </h1>
        <h2>Some of the AWS Machine Learning Services</h2>
        <dl className="dictionary">{awsMachineLearning.map(createEntry)}</dl>
      </div>
        
    )
}

export default MachineLearning;