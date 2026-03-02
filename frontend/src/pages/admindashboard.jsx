import React, { useState } from 'react';
import Header from './Admin/Header';
import Sidebar from './Admin/Sidebar';
import DashboardView from './Admin/DashboardView';
import ManageView from './Admin/ManageView';
import WorkerView from './Admin/WorkerView';
import ReportView from './Admin/ReportView';
import AuditLogs from './Admin/AuditLogs';

const admindashboard = () => {
  const [currentView, setCurrentView] = useState('admin');

  // Map view keys to components
  const views = {
    admin: <DashboardView onViewChange={setCurrentView} />,
    manage: <ManageView />,
    worker: <WorkerView />,
    report: <ReportView />,
    audit: <AuditLogs />,
  };

  return (
    <div className="bg-background-light min-h-screen font-sans text-[#121614]">
      <Header />
      <div className="flex">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />
        <div className="flex-1">
          {views[currentView] || <DashboardView />}
        </div>
      </div>
    </div>
  );
};

export default admindashboard;
