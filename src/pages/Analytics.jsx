import React from "react";
import awsAnalytics from "../Services/awsAnalytics";
import AnalyticsEntry from "../components/AnalyticsEntry";

function createEntry(entry) {
    return (
      <AnalyticsEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function Analytics(){
    return(
        <div>
        <h1>
          <span>Analytics</span>
        </h1>
        <h2>Some of the AWS Analycis Services</h2>
        <dl className="dictionary">{awsAnalytics.map(createEntry)}</dl>
      </div>
        
    )
}

export default Analytics;