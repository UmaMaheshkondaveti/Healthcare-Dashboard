
import React from 'react';
import { ChevronLeft, ChevronRight, Outdent as ToothIcon, Dumbbell as DumbbellIcon } from 'lucide-react';
import './CalendarView.css';

const iconMapDetails = {
  Tooth: ToothIcon,
  Dumbbell: DumbbellIcon,
};

const CalendarView = ({ calendarData }) => {
  const { monthYear, daysOfWeek, dates, detailedAppointments } = calendarData;

  return (
    <div className="calendar-view-card card">
      <div className="calendar-view-content"> {/* Replaces CardContent */}
        <div className="calendar-header">
          <h3 className="calendar-month-year">{monthYear}</h3>
          <div className="calendar-nav-buttons">
            <button className="calendar-nav-button">
              <ChevronLeft className="calendar-nav-icon" />
            </button>
            <button className="calendar-nav-button">
              <ChevronRight className="calendar-nav-icon" />
            </button>
          </div>
        </div>

        <div className="calendar-days-header">
          {daysOfWeek.map(day => <div key={day} className="calendar-day-label">{day}</div>)}
        </div>

        <div className="calendar-grid">
          {dates.map((item, idx) => (
            <div key={idx} className={`calendar-date-cell ${item.isScheduled ? 'calendar-date-cell-scheduled' : ''}`}>
              <div className={`calendar-date-number ${item.isPrimaryDate ? 'calendar-date-number-primary' : ''}`}>{item.date}</div>
              <div className="calendar-appointments-list">
                {item.displayTime && <div className={`calendar-appointment-time-default ${item.hideDefaultTime ? 'hidden' : ''}`}>{item.displayTime}</div>}
                {item.appointments?.map((app, appIdx) => (
                  <div key={appIdx} className={`calendar-appointment-item calendar-appointment-${app.type}`}>
                    {app.start}
                  </div>
                ))}
                {item.placeholderTimes?.map((pt, ptIdx) => (
                  <div key={`pt-${ptIdx}`} className="calendar-appointment-placeholder">{pt}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="calendar-detailed-appointments">
        {detailedAppointments.map((appt, idx) => {
          const IconComponent = iconMapDetails[appt.icon];
          return (
            <div key={idx} className="detailed-appointment-card" style={{backgroundColor: appt.bgColorHex}}>
              <div className="detailed-appointment-info">
                <h4 className="detailed-appointment-title" style={{color: appt.textColorHex}}>{appt.title}</h4>
                <p className="detailed-appointment-time" style={{color: appt.textColorHex, opacity: 0.9}}>{appt.time}</p>
                <p className="detailed-appointment-doctor" style={{color: appt.textColorHex}}>{appt.doctor}</p>
              </div>
              <div className="detailed-appointment-icon-wrapper" style={{backgroundColor: appt.bgColorHex === '#3B82F6' ? 'rgba(255,255,255,0.2)' : '#FFFFFF'}}>
                {IconComponent && <IconComponent className="detailed-appointment-icon" style={{color: appt.iconColorHex}} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
  