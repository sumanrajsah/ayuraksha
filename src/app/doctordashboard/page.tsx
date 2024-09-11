"use client"
import './style.css'
import DoctorProfile from "../components/doctorprofile";
import Navbar from "../components/navbar";
import PatientsChart from "../components/patientvisit"

export default function DoctorDashboard(){
    return(
        <main>
            <Navbar/>
            <div className="patients-chart-cont">
            <DoctorProfile/>
            <PatientsChart/>
            </div>
        </main>
    );
}