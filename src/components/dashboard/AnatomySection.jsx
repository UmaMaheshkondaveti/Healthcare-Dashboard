
import React from 'react';
import { Search, Heart, Zap } from 'lucide-react';
import './AnatomySection.css';

const iconMap = {
  Heart,
  Zap,
};

const AnatomySection = ({ anatomyData }) => {
  const { imageAlt, tags } = anatomyData;
  return (
    <div className="anatomy-section-container">
      <img
        className="anatomy-image"
        alt={imageAlt}
        src="/assets/skelton.jpg" />
      <button className="anatomy-search-button">
        <Search className="anatomy-search-icon" />
      </button>
      {tags.map((tag, index) => {
        const IconComponent = iconMap[tag.icon];
        let positionStyle = {};
        if (tag.position === 'top-left') {
          positionStyle = { top: '33.33%', left: '1rem', transform: 'translateY(-50%)' };
        } else if (tag.position === 'bottom-right') {
          positionStyle = { bottom: '25%', right: '1rem', transform: 'translateY(50%)' };
        }
        
        return (
          <div key={index} className="anatomy-tag" style={positionStyle}>
            <div className="anatomy-tag-content" style={{backgroundColor: tag.bgColorHex || '#3B82F6'}}>
              {IconComponent && <IconComponent className="anatomy-tag-icon" />} {tag.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnatomySection;
  