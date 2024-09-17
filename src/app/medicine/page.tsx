'use client'
import React from "react";
import MedicineComponent from "../components/medicineComp";
import Navbar from "../components/navbar";
import './style.css'
import '@fontsource/poppins'

export default function MedicineRecords(){
    return(
        <main className="medicine-main">
            <Navbar/>
            <MedicineComponent/>
        </main>
    )
}