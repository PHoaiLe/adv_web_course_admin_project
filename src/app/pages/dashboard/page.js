"use client";
import React, { Fragment } from "react";

import Statistic from "@/app/pages/dashboard/sections/statistic";
import OnlineClasses from "@/app/pages/dashboard/sections/online_classes";
import PopularClasses from "@/app/pages/dashboard/sections/popular_classes";

export default function Dashboard() {
  const data = {
    statistic: {
      classes: 5897,
      new_users: 3000,
      new_teachers: 650,
      high_grades: 48.85
    },
    online_classes: [
      {
        name: "Introduction to programming",
        teacher: "Vu Quoc Hoang",
        attendants: 340,
        rate: 46.53
      },
      {
        name: "Web programming",
        teacher: "Nguyen Huy Khanh",
        attendants: 319,
        rate: 46.53,
      }, 
      {
        name: "DataStructure and Algorithms",
        teacher: "Le Ngoc Thanh",
        attendants: 294,
        rate: 36.49
      },
      {
        name: "Web Advanced Programming",
        teacher: "Mai Anh Tuan",
        attendants: 147,
        rate: 50.87
      }, 
      {
        name: "Mobile Application Programming",
        teacher: "Ho Tuan Thanh",
        attendants: 190,
        rate: 46.53
      }
    ],
    popular_classes: [
      {
        name: "Software Architect",
        attendants: 1480,
        hot: 55
      },
      {
        name: "Game Development",
        attendants: 2480,
        hot: 75
      },
      {
        name: "Software Testing",
        attendants: 3000,
        hot: 70
      },
      {
        name: "Advanced Database",
        attendants: 3578,
        hot: 65
      },
      {
        name: "Data Visualization",
        attendants: 1780,
        hot: 65
      }
    ],
  }

  return (
    <Fragment>
      <div className="relative md:ml-102 bg-gray-100">
        <Statistic
          statistic={data.statistic} 
        />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4">
              <OnlineClasses
                online_classes={data.online_classes}
              />
            </div>
            <div className="w-full xl:w-1/2 px-4">
              <PopularClasses
                popular_classes={data.popular_classes}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}