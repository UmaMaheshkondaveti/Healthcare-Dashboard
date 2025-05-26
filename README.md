# Healthcare Dashboard (React - Static Display)

## 📌 Objective

Recreate a **pixel-perfect, static healthcare dashboard** using **React** based on the provided design:

🔗 Design Reference Image: [View Design](https://i.ibb.co/B2DdGkgF/Screenshot-2025-05-23-at-3-31-31-PM.png)

---

## 🧩 Features (Static Only)

- Clean, responsive UI.
- React component-based architecture.
- Static mock data rendered via props.
- No interactivity (no clicks, no forms, no API).
- Precise replication of visual design:
  - Typography
  - Icons
  - Color scheme
  - Spacing and layout
  - Shadows and borders

---

## 🔧 Tech Stack

- **Framework:** React (Create React App or Vite)
- **Styling:** CSS / CSS Modules / Styled Components
- **Icons:** [Lucide React](https://lucide.dev/), Font Awesome, or open-source SVGs
- **Deployment:** Vercel / Netlify / GitHub Pages

---

## 🗂️ Component Structure

### `App`
- Root component.
- Manages layout: `Header`, `Sidebar`, and `DashboardMainContent`.

### `Header`
- Logo / Title
- Search bar (display only)
- Notification icon
- User profile (avatar + name)
- Add (`+`) button

### `Sidebar`
- "General" section
- Static navigation links:
  - Dashboard
  - History
  - Calendar
  - Appointments
  - Statistics
  - Tests
  - Chat
  - Support
  - Setting

### `DashboardMainContent`
- Main container for all dashboard sections:
  - `DashboardOverview`
  - `AnatomySection`
  - `HealthStatusCards`
  - `CalendarView`
  - `UpcomingSchedule`
  - `ActivityFeed`

---

## 📚 Sub-Components

### `AnatomySection`
- Human body image with:
  - Healthy Heart (green)
  - Lungs (red)
  - Teeth (default)
  - Bone (default)

### `HealthStatusCards`
- Cards for:
  - Lungs
  - Teeth
  - Bone
- Show date and status

### `CalendarView`
- Static grid for month (e.g., October 2021)
- Shows appointments: 09:00, 11:00, 13:00, 15:00
- Static appointment cards below:
  - Dentist
  - Physiotherapy

### `UpcomingSchedule`
- “The Upcoming Schedule”
- Grouped by day:
  - On Thursday
  - On Saturday
- Uses `SimpleAppointmentCard`

### `ActivityFeed`
- "Activity" section
- Shows static text: "3 appointments on this week"
- Bar chart: static via CSS

### `SimpleAppointmentCard`
- Reusable card
- Shows:
  - Title (e.g., Ophthalmologist)
  - Time
  - Icon

---

## 📁 File Structure

src/
├── assets/ # Images and icons
├── components/
│ ├── Header/
│ ├── Sidebar/
│ ├── DashboardMainContent/
│ ├── AnatomySection/
│ ├── HealthStatusCards/
│ ├── CalendarView/
│ ├── UpcomingSchedule/
│ ├── ActivityFeed/
│ └── SimpleAppointmentCard/
├── data/ # Static mock data files
│ ├── appointments.js
│ ├── healthData.js
│ └── navigation.js
├── styles/ # Global and component-level CSS
├── App.js
└── index.js

