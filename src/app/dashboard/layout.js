import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import Navbar from '@/app/components/Navbar';
//import Footer from '@/app/components/Footer';

export default function DashboardSidebarLayout({ children }) {  
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className="p-2 sm:ml-64 mt-14">
         {children}
         {/* <Footer/> */}
      </div>
      
   </div>
  );
}
