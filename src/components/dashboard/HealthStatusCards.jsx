
import React from 'react';
import { Heart, Outdent, Bone } from 'lucide-react';
import './HealthStatusCards.css';

const iconMap = {
  Lungs: Heart, 
  Teeth: Outdent,
  Bone: Bone,
};

const HealthStatusCards = ({ healthIndicators }) => {
  return (
    <div className="health-status-cards-container">
      {healthIndicators.map((item) => {
        const IconComponent = iconMap[item.icon];
        return (
          <div key={item.name} className="health-status-card">
            <div className="health-status-card-header">
              <div className="health-status-card-title-group">
                {IconComponent && <IconComponent className="health-status-card-icon" style={{color: item.colorHex}} />}
                <span className="health-status-card-name">{item.name}</span>
              </div>
            </div>
            <p className="health-status-card-date">Date: {item.date}</p>
            <div className="health-status-progress-bar-container">
              <div 
                className="health-status-progress-bar-indicator" 
                style={{ width: `${item.value}%`, backgroundColor: item.colorHex }}
              ></div>
            </div>
          </div>
        );
      })}
      <div className="health-status-details-link-container">
        <a href="#" className="health-status-details-link">
          Details &rarr;
        </a>
      </div>
    </div>
  );
};

export default HealthStatusCards;
  