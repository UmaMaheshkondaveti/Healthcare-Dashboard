
import React from 'react';
import { Syringe, Eye, HeartPulse, User } from 'lucide-react';
import './SimpleAppointmentCard.css';

const iconMap = {
  Syringe,
  Eye,
  HeartPulse,
  Neurologist: User, 
};

const SimpleAppointmentCard = ({ title, time, iconName, iconColorHex }) => {
  const IconComponent = iconMap[iconName];
  return (
    <div className="simple-appointment-card">
      <div className="simple-appointment-card-content">
        <div>
          <h5 className="simple-appointment-card-title">{title}</h5>
          <p className="simple-appointment-card-time">{time}</p>
        </div>
        {IconComponent && <IconComponent className="simple-appointment-card-icon" style={{ color: iconColorHex }} />}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
  