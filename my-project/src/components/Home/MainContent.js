import React from "react";
import Journey from "./Journey";
import JourneyData from "./JourneyData";

export default  function MainContent() {
  const journeyItems = JourneyData.map(journeyItem => 
    <Journey 
      key={journeyItem.id}
      {...journeyItem}
    />
  );

  return (
    <div className="main-content">
      <button className="start-button">Start</button>
      <h1>learning react</h1>
      <h1>learning react</h1>
      <ul className='reason-list'>
        <li>It's is popular library, so I'll be able to fit in with the cool kids</li>
        <li>I'm more likely to get a job as a dev if I know React</li>
      </ul>
      <div className="journey-list">
        {journeyItems}
      </div>
    </div>
  );
}
