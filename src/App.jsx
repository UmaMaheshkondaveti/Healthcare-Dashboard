
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import DashboardPage from '@/pages/DashboardPage';
import '@/App.css'; 

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-area">
        <Header />
        <main className="page-content">
          <DashboardPage />
        </main>
      </div>
    </div>
  );
}

export default App;
  