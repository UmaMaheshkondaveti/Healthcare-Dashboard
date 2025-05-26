
export const mockUserData = {
  name: 'Dr. John Doe',
  avatarUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/d73fb579-f2c0-4e33-883d-f082f15a3acc/962d1a877e1b1c8770c460614f4525b9.png',
};

export const mockSidebarNav = [
  { label: 'General', isTitle: true },
  { icon: 'LayoutGrid', label: 'Dashboard', href: '#', active: true },
  { icon: 'History', label: 'History', href: '#' },
  { icon: 'CalendarDays', label: 'Calendar', href: '#' },
  { icon: 'ClipboardList', label: 'Appointments', href: '#' },
  { icon: 'BarChart3', label: 'Statistics', href: '#' },
  { icon: 'FlaskConical', label: 'Tests', href: '#'},
  { label: 'Tools', isTitle: true, marginTopClass: 'mt-6' },
  { icon: 'MessageSquare', label: 'Chat', href: '#' },
  { icon: 'LifeBuoy', label: 'Support', href: '#' },
  { icon: 'Settings', label: 'Setting', href: '#', isFooter: true, marginTopClass: 'mt-auto' },
];

export const mockAnatomyData = {
  imageAlt: 'Anatomical illustration of human body',
  indicators: [
    { name: 'Lungs', date: '26 Okt 2021', value: 60, colorHex: '#EF4444', icon: 'Lungs' }, // health-red
    { name: 'Teeth', date: '26 Okt 2021', value: 80, colorHex: '#14B8A6', icon: 'Teeth' }, // health-teal
    { name: 'Bone', date: '26 Okt 2021', value: 45, colorHex: '#F97316', icon: 'Bone' },   // health-orange
  ],
  tags: [
    { text: 'Healthy Heart', position: 'top-left', icon: 'Heart', bgColorHex: '#3B82F6' }, // theme-primary
    { text: 'Healthy Leg', position: 'bottom-right', icon: 'Zap', bgColorHex: '#06B6D4' }, // brand-cyan
  ]
};

export const mockActivityData = {
  description: '3 appointment on this week',
  days: [
    { day: 'Mon', values: [30, 50, 20] },
    { day: 'Tues', values: [60, 20, 40] },
    { day: 'Wed', values: [40, 30, 60] },
    { day: 'Thurs', values: [70, 10, 50] },
    { day: 'Fri', values: [25, 45, 35] },
    { day: 'Sat', values: [55, 30, 25] },
    { day: 'Sun', values: [40, 60, 15] },
  ]
};

export const mockCalendarData = {
  monthYear: 'October 2021',
  daysOfWeek: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  dates: [
    { date: 25, displayTime: '10:00', placeholderTimes: ['11:00', '12:00'] },
    { date: 26, displayTime: '08:00', appointments: [{ start: '09:00', type: 'active' }], isPrimaryDate: true, isScheduled: true, placeholderTimes: ['10:00'] },
    { date: 27, displayTime: '12:00', placeholderTimes: ['13:00'] },
    { date: 28, displayTime: '10:00', appointments: [{ start: '11:00', type: 'scheduled' }], isScheduled: true, placeholderTimes: ['-', '12:00'] },
    { date: 29, displayTime: '14:00', hideDefaultTime: true, appointments: [{ start: '14:00', type: 'empty'}], placeholderTimes: ['-', '14:00', '16:00'] },
    { date: 30, displayTime: '12:00', appointments: [{ start: '12:00', type: 'scheduled'}, { start: '14:00', type: 'empty' }], isScheduled: true, placeholderTimes: ['14:00', '15:00'], hideDefaultTime:true },
    { date: 31, displayTime: '09:00', appointments: [{ start: '09:00', type: 'scheduled'}, { start: '10:00', type: 'empty' }], isScheduled: true, placeholderTimes: ['10:00', '11:00'], hideDefaultTime:true },
  ],
  detailedAppointments: [
    {
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: 'Tooth',
      bgColorHex: '#3B82F6', // theme-primary
      textColorHex: '#FFFFFF',
      iconColorHex: '#FFFFFF',
    },
    {
      title: 'Physiotherapy Appoinment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: 'Dumbbell',
      bgColorHex: '#EEF2FF', // indigo-100
      textColorHex: '#4338CA', // indigo-700
      iconColorHex: '#6366F1', // indigo-500
    },
  ]
};

export const mockUpcomingScheduleData = {
  title: 'The Upcoming Schedule',
  scheduleDays: {
    Thursday: [
      { name: 'Health checkup complete', time: '11:00 AM', icon: 'Syringe', iconColorHex: '#EF4444' }, // red-500
      { name: 'Ophthalmologist', time: '14:00 PM', icon: 'Eye', iconColorHex: '#F59E0B' }, // yellow-500 (amber-500 is closer to image)
    ],
    Saturday: [
      { name: 'Cardiologist', time: '12:00 AM', icon: 'HeartPulse', iconColorHex: '#EF4444' }, // red-500
      { name: 'Neurologist', time: '16:00 PM', icon: 'Neurologist', iconColorHex: '#8B5CF6' }, // purple-500
    ],
  }
};
  