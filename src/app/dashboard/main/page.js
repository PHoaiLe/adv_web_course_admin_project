"use client";
import React from "react";
import Percent from "@/app/dashboard/main/percentage";
import View from "@/app/dashboard/main/view";
import "react-toastify/dist/ReactToastify.css";


export default function Page(){
    return (
    <>
      <div className="relative md:ml-102 bg-gray-100">
        <Percent/>
        <View/>
      </div>
    
    </> 
  );
}