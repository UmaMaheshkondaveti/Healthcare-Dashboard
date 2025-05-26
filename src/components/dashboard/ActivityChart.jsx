import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';


const ActivityChart = ({ activityData }) => {
  const { description, days } = activityData;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Activity</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[150px] flex justify-between items-end space-x-2 md:space-x-4">
          {days.map((data) => (
            <div key={data.day} className="flex-1 flex flex-col items-center">
              <div className="flex items-end h-full space-x-1">
                <div style={{ height: `${data.values[0]}%` }} className="w-1.5 md:w-2 bg-theme-secondary rounded-t-full"></div>
                <div style={{ height: `${data.values[1]}%` }} className="w-1.5 md:w-2 bg-brand-cyan rounded-t-full"></div>
                <div style={{ height: `${data.values[2]}%` }} className="w-1.5 md:w-2 bg-theme-primary rounded-t-full"></div>
              </div>
              <span className="mt-2 text-xs text-theme-muted">{data.day}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;