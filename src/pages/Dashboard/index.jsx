import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MusicCards from './MusicCards';
const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <Header/>
       <Sidebar/>
     <MusicCards/>
      </div>

  );
};
export default Dashboard;






