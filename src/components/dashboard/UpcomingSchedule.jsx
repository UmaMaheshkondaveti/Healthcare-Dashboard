
import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard'; 
import './UpcomingSchedule.css';

const UpcomingSchedule = ({ scheduleData }) => {
  return (
    <div className="upcoming-schedule-container">
      <h3 className="upcoming-schedule-title">{scheduleData.title}</h3>
      {Object.entries(scheduleData.scheduleDays).map(([day, items]) => (
        <div key={day} className="upcoming-schedule-day-group">
          <p className="upcoming-schedule-day-label">On {day}</p>
          <div className="upcoming-schedule-cards-grid">
            {items.map((item, idx) => (
              <SimpleAppointmentCard 
                key={idx}
                title={item.name}
                time={item.time}
                iconName={item.icon}
                iconColorHex={item.iconColorHex} /* Pass hex color */
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
  