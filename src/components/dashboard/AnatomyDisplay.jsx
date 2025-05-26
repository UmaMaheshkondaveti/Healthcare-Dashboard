import React from 'react';
import AnatomySection from '@/components/dashboard/AnatomySection';
import HealthStatusCards from '@/components/dashboard/HealthStatusCards';
import { Card } from '@/components/ui/card';


const AnatomyDisplay = ({ anatomyData }) => {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-6 flex flex-col md:flex-row gap-6 items-start">
        <AnatomySection anatomyData={anatomyData} />
        <HealthStatusCards healthIndicators={anatomyData.indicators} />
      </div>
    </Card>
  );
};

export default AnatomyDisplay;