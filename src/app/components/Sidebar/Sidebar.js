'use client';
import {React, useState, useEffect} from "react";
import Link from "next/link";
import { initFlowbite } from 'flowbite';
import {usePathname } from 'next/navigation';

export default function Sidebar()
{
    const [activeLink, setActiveLink] = useState('');
    const pathname = usePathname();
    useEffect(() => {
    //get current url path
    setActiveLink(pathname);
      //init flowbite
    initFlowbite();
    }, [pathname]);

    return(
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
               <li className={`py-1 ${activeLink === '/pages/dashboard' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700'}`}>
                  <Link href="/pages/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-cyan-700">
                     <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/pages/dashboard' ? 'text-white' : 'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" 
                     d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" clipRule="evenodd"></path></svg>
                     <span className={`py-1 ${activeLink === '/pages/dashboard' ? 'text-white ml-3' : 'ml-3'}`} >Main Dashboard</span>
                  </Link>
               </li>
            </ul>
            <ul className="space-y-2 font-medium">
               <li className={`py-1 ${activeLink === '/pages/accounts' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700'}`}>
                  <Link href="/pages/accounts" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-cyan-700">
                     <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/pages/accounts' ? 'text-white' : 'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                     <span className={`py-1 ${activeLink === '/pages/accounts' ? 'text-white ml-3' : 'ml-3'}`} >Users</span>
                  </Link>
               </li>
            </ul>
            <ul className="space-y-2 font-medium">
               <li className={`py-1 ${activeLink === '/pages/classes' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700'}`}>
                  <Link href="/pages/classes" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-cyan-700">
                     <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/pages/classes' ? 'text-white' : 'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" 
                     d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" clipRule="evenodd"></path></svg>
                     <span className={`py-1 ${activeLink === '/pages/classes' ? 'text-white ml-3' : 'ml-3'}`} >Classes</span>
                  </Link>
               </li>
            </ul>
        </div>
        
    </aside>
    );
}

