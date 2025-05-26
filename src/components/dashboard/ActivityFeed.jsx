
import React from 'react';
import './ActivityFeed.css'; 

const ActivityFeed = ({ activityData }) => {
  const { description, days } = activityData;
  return (
    <div className="activity-feed-card card">
      <div className="activity-feed-header card-header">
        <h3 className="activity-feed-title card-title">Activity</h3>
        <p className="activity-feed-description card-description">{description}</p>
      </div>
      <div className="activity-feed-content card-content">
        <div className="activity-chart-container">
          {days.map((data) => (
            <div key={data.day} className="activity-chart-day">
              <div className="activity-chart-bars">
                <div style={{ height: `${data.values[0]}%` }} className="activity-chart-bar bar-secondary"></div>
                <div style={{ height: `${data.values[1]}%` }} className="activity-chart-bar bar-brand"></div>
                <div style={{ height: `${data.values[2]}%` }} className="activity-chart-bar bar-primary"></div>
              </div>
              <span className="activity-chart-day-label">{data.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
  