import React from "react";
import awsContent from "../Services/awsContent";
import ContentEntry from "../components/ContentEntry";

function createEntry(entry) {
    return (
      <ContentEntry
        key={entry.id}
        icon={entry.icon}
        name={entry.name}
        description={entry.description}
        more={entry.more}
      />
    );
  }

function Content(){
    return(
        <div>
        <h1>
          <span>Networking and Content Delivery</span>
        </h1>
        <h2>Some of the AWS Networking and Content Delivery Services</h2>
        <dl className="dictionary">{awsContent.map(createEntry)}</dl>
      </div>
        
    )
}

export default Content;