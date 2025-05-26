
import React from 'react';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import ActivityFeed from '@/components/dashboard/ActivityFeed'; 
import CalendarView from '@/components/dashboard/CalendarView';
import UpcomingSchedule from '@/components/dashboard/UpcomingSchedule';
import { ChevronDown } from 'lucide-react';
import { 
  mockAnatomyData, 
  mockActivityData, 
  mockCalendarData, 
  mockUpcomingScheduleData 
} from '@/data/mockData';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page-container">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <button className="dashboard-filter-button">
          This Week
          <ChevronDown className="dashboard-filter-icon" />
        </button>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-grid-main">
          <DashboardOverview 
            anatomyData={mockAnatomyData} 
          />
          <ActivityFeed activityData={mockActivityData} />
        </div>
        <div className="dashboard-grid-sidebar">
          <CalendarView calendarData={mockCalendarData} />
          <UpcomingSchedule scheduleData={mockUpcomingScheduleData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
  