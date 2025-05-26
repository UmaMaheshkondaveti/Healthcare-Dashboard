
import React from 'react';
import AnatomySection from '@/components/dashboard/AnatomySection';
import HealthStatusCards from '@/components/dashboard/HealthStatusCards';
import './DashboardOverview.css';

const DashboardOverview = ({ anatomyData }) => {
  return (
    <div className="dashboard-overview-card">
      <div className="dashboard-overview-content">
        <AnatomySection anatomyData={anatomyData} />
        <HealthStatusCards healthIndicators={anatomyData.indicators} />
      </div>
    </div>
  );
};

export default DashboardOverview;
  