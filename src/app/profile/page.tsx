"use client";  // Ensures the code runs on the client side
import React, { useState, useEffect, useContext } from "react";  // Import React hooks
import Image from "next/image";
import "./style.css";
import "@fontsource/poppins";
import axios from "axios";
import { ProfileContext } from "../profileContext";
import Navbar from "../components/navbar";

export default function Profile() {
    const profileContext = useContext(ProfileContext);
    if (!profileContext) {
        throw new Error('ProfileContext is not provided');
      }
      const { profileData,setProfileData } = profileContext;
    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Close modal when clicking outside of it
    useEffect(() => {
        const getProfileData= async()=>{
            try{
                const response= await axios.get('/api/profile/patient');
                if(response.data.success){
                    console.log((response.data.reports))
                }
            }catch(e){}
        }
        getProfileData();
        // Add 'MouseEvent' type to the event parameter
        const handleOutsideClick = (event: MouseEvent) => {
            const modal = document.getElementById("miniModal");
            // Use `event.target` as a type-safe element
            if (modal && !modal.contains(event.target as Node) && (event.target as HTMLElement).id !== "openModalBtn") {
                setIsModalOpen(false);
            }
        };
        // Add event listener for clicks
        window.addEventListener("click", handleOutsideClick);
        return () => {
            // Cleanup the event listener on component unmount
            window.removeEventListener("click", handleOutsideClick);
        };

    }, []);
    return (
        <main className="profile-main">
            <Navbar/>
            <div className="profile-main-container">
                <div className="profile-headContainer">
                    <h1 className="profile-heading">Profile
                        <div className="profile-roundLine" />
                    </h1>
                </div>
                <div className="profile-details-cont">
                    <div className="profile-contact-details-cont profile-box-border">
                        <div className="profile-image-name">
                            <div className="profile-photo">
                                <Image
                                    src={'profile-image.svg'}
                                    priority
                                    alt="photo"
                                    height={140}
                                    width={140}
                                    className="profile-photo-class"
                                />
                            </div>
                            <div className="profile-name">
                                <h1 className="profile-class-pink">{profileData.gender === 'Male'?'Mr ':'Ms '}{profileData.firstName}</h1>
                            </div>
                        </div>
                        <div className="profile-emergency-contact">
                            <h2>Contact Details:</h2>
                            <div className="profile-emergency-contact-heading">Emergency contact</div>
                            <div className="profile-number profile-class-pink">
                                <Image
                                    src={'icon-Phone.svg'}
                                    priority
                                    alt="photo"
                                    height={20}
                                    width={20}
                                    className="profile-photo-phone"
                                /> &nbsp;{profileData?.phone_no}
                            </div>
                            <div className="profile-number profile-class-pink">
                                <Image
                                    src={'icon-house.svg'}
                                    priority
                                    alt="photo"
                                    height={20}
                                    width={20}
                                    className="profile-photo-house"
                                /> &nbsp;4
                            </div>
                        </div>
                    </div>
                    <div className="profile-info-cont profile-box-border">
                        <h3 className="profile-class-pink profile-personl-info-heading">Personl info:</h3>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">First Name</div>
                                <h2 className="profile-class-pink profile-class-near">{profileData.firstName}</h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Last Name</div>
                                <h2 className="profile-class-pink profile-class-near">{profileData.lastName}</h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Date of Birth</div>
                                <h2 className="profile-class-pink profile-class-near">{}</h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Email Address</div>
                                <h2 className="profile-class-pink profile-class-near"></h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Father Name</div>
                                <h2 className="profile-class-pink profile-class-near">{profileData.fathername}</h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Mother Name</div>
                                <h2 className="profile-class-pink profile-class-near">{profileData.mothername}</h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Phone No.</div>
                                <h2 className="profile-class-pink profile-class-near"></h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Blood Type</div>
                                <h2 className="profile-class-pink profile-class-near"></h2>
                            </div>
                        </div>
                    </div>
                    <div className="profile-overview-cont profile-box-border">
                        <h3 className="profile-class-pink profile-personl-info-heading">Overview:</h3>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">First Name</div>
                                <h2 className="profile-class-pink profile-class-near">{profileData.firstName}</h2>
                            </div>
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">Last Name</div>
                                <h2 className="profile-class-pink profile-class-near">{profileData.lastName}</h2>
                            </div>
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">Gender</div>
                                <h2 className="profile-class-pink profile-class-near">{profileData.gender}</h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">Age</div>
                                <h2 className="profile-class-pink profile-class-near">20</h2>
                            </div>
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">Joined Date</div>
                                <h2 className="profile-class-pink profile-class-near"></h2>
                            </div>
                        </div>

                    </div>
                    <div className="profile-history-cont profile-box-border">
                        <h3 className="profile-class-pink profile-personl-info-heading">Medical History:</h3>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Condition</div>
                                <h2 className="profile-class-pink profile-class-near"></h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Last Checkup</div>
                                <h2 className="profile-class-pink profile-class-near"></h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Hospital Name</div>
                                <h2 className="profile-class-pink profile-class-near"></h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Upcoming Checkup Date</div>
                                <h2 className="profile-class-pink profile-class-near"></h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Doctor</div>
                                <h2 className="profile-class-pink profile-class-near"></h2>
                            </div>
                            <div className="profile-box-inner">
                                <button className="profile-allergies-button" id="openModalBtn" onClick={openModal}>Allergies</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Modal Structure */}
                {isModalOpen && (
                    <div id="miniModal" className="modal">
                        <div className="modal-content">
                            {/* Close button */}
                            <span className="close-btn" onClick={closeModal}>
                                &times;
                            </span>
                            <p>Allergies</p>
                            <p>Fragrance</p>
                            <p>Peanut</p>
                            <p>Egg</p>
                            <p>Milk</p>
                            <p>Latex</p>
                            <p>Sesame</p>
                            <p>Mold</p>
                            <p>Fragrance</p>
                            <p>Peanut</p>
                            <p>Egg</p>
                            <p>Milk</p>
                           
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}