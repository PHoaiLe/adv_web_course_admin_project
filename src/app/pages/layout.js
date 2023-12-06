import React from 'react';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Navbar from '@/app/components/Navbar/Navbar';
//import Footer from '@/app/components/Footer';

export default function Dashboard({ children }) {  
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