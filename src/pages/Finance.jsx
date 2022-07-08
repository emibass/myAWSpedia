import React from "react";
import awsFinance from "../Services/awsFinance";
import FinanceEntry from "../components/FinanceEntry";

function createEntry(entry) {
    return (
      <FinanceEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function Finance(){
    return(
        <div>
        <h1>
          <span>Financial Management</span>
        </h1>
        <h2>Some of the AWS Cloud Financial Management Services</h2>
        <dl className="dictionary">{awsFinance.map(createEntry)}</dl>
      </div>
        
    )
}

export default Finance;