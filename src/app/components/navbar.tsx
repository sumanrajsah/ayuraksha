import Image from "next/image";
import './navbar.css';
import React, { useState } from "react";
import { HamburgerMenu, AboutUsButton, HomeButton, ServicesButton, HospitalsButton, AppointmentsButton, ResourcesButton, ContactUs, FaqButton } from "./svg";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the menu is expanded
 

  const toggleMenu = () => {
    setIsExpanded(!isExpanded); // Toggle the menu state
  
  };

  return (
    <div className="side-navbar-cont" style={{width:`${isExpanded ? '100vw':''}`,background:`${isExpanded ? '#d4616d74':''}`}}>
      <div className={`side-navbar ${isExpanded ? "expanded" : ""}`}> {/* Toggle the class based on state */}
        <div className="ayuraksha-logo-cont">
        <Image
          src={!isExpanded ? 'ayuraksha-logo.svg' : 'ayuraksha-logo-full.svg'} // Use the logo state variable
          alt="Ayuraksha Logo"
          height={isExpanded ? 50: 80}
          width={isExpanded ? 190 : 50}
          priority
          className="ayuraksha-logo"
        />
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}> {/* Click event to toggle the menu */}
          <div className="menu-item">
            <HamburgerMenu/>
            {isExpanded && <span className="icon-label">Menu</span>}
          </div>
        </div>
        
        {/* Icons and their labels (conditionally rendered) */}
        <div className="menu-item">
          <AboutUsButton />
          {isExpanded && <span className="icon-label">About Us</span>}
        </div>
        <div className="menu-item">
          <HomeButton />
          {isExpanded && <span className="icon-label">Home</span>}
        </div>
        <div className="menu-item">
          <ServicesButton />
          {isExpanded && <span className="icon-label">Services</span>}
        </div>
        <div className="menu-item">
          <HospitalsButton />
          {isExpanded && <span className="icon-label">Hospitals</span>}
        </div>
        <div className="menu-item">
          <AppointmentsButton />
          {isExpanded && <span className="icon-label">Appointments</span>}
        </div>
        <div className="menu-item">
          <ResourcesButton />
          {isExpanded && <span className="icon-label">Resources</span>}
        </div>
        <div className="menu-item">
          <ContactUs />
          {isExpanded && <span className="icon-label">Contact Us</span>}
        </div>
        <div className="menu-item">
          <FaqButton />
          {isExpanded && <span className="icon-label">FAQ</span>}
        </div>
      </div>
    </div>
  );
}
