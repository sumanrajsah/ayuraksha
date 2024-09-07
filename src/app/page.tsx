'use client'
import Image from "next/image";
import './style.css'
import Navbar from "./components/navbar";
import "@fontsource/poppins"; 
export default function Home() {
  return (
    <main className="home-main" >
      <Navbar/>
      <p >Welcome to AyuRaksha</p>
    </main>
  );
}
