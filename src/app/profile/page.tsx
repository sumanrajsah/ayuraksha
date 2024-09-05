"use client"
import Image from "next/image";
import "./style.css";
import '@fontsource/poppins';
import axios from 'axios';

export default function Profile() {
    return (
        <main>
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
                                <h1 className="profile-class-pink">Ms. Neha</h1>
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
                                /> &nbsp;+91 99873 86637
                            </div>
                            <div className="profile-number profile-class-pink">
                                <Image
                                    src={'icon-house.svg'}
                                    priority
                                    alt="photo"
                                    height={20}
                                    width={20}
                                    className="profile-photo-house"
                                /> &nbsp;pratapgarh , haryana
                            </div>
                        </div>
                    </div>
                    <div className="profile-info-cont profile-box-border">
                        <h3 className="profile-class-pink profile-personl-info-heading">Personl info:</h3>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">First Name</div>
                                <h2 className="profile-class-pink profile-class-near">Neha</h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Last Name</div>
                                <h2 className="profile-class-pink profile-class-near">Sharma</h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Date of Birth</div>
                                <h2 className="profile-class-pink profile-class-near">15/06/2004</h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Email Address</div>
                                <h2 className="profile-class-pink profile-class-near">neha@gmail.com</h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Father Name</div>
                                <h2 className="profile-class-pink profile-class-near">Abhi Sharma</h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Mother Name</div>
                                <h2 className="profile-class-pink profile-class-near">Anu Sharma</h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Phone No.</div>
                                <h2 className="profile-class-pink profile-class-near">+91 62538 83627</h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Blood Type</div>
                                <h2 className="profile-class-pink profile-class-near">A+</h2>
                            </div>
                        </div>
                    </div>
                    <div className="profile-overview-cont profile-box-border">
                        <h3 className="profile-class-pink profile-personl-info-heading">Overview:</h3>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">First Name</div>
                                <h2 className="profile-class-pink profile-class-near">Neha</h2>
                            </div>
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">Last Name</div>
                                <h2 className="profile-class-pink profile-class-near">Sharma</h2>
                            </div>
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">Gender</div>
                                <h2 className="profile-class-pink profile-class-near">Female</h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">Age</div>
                                <h2 className="profile-class-pink profile-class-near">20</h2>
                            </div>
                            <div className="profile-box-inner-33">
                                <div className="profile-class-grey">Joined Date</div>
                                <h2 className="profile-class-pink profile-class-near">20/06/2012</h2>
                            </div>
                        </div>
                        
                    </div>
                    <div className="profile-history-cont profile-box-border">
                    <h3 className="profile-class-pink profile-personl-info-heading">Medical History:</h3>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Condition</div>
                                <h2 className="profile-class-pink profile-class-near">Asthma</h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Last Checkup</div>
                                <h2 className="profile-class-pink profile-class-near">24/09/2024</h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Hospital Name</div>
                                <h2 className="profile-class-pink profile-class-near">DHS</h2>
                            </div>
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Upcoming Checkup Date</div>
                                <h2 className="profile-class-pink profile-class-near">06/10/2024</h2>
                            </div>
                        </div>
                        <div className="profile-box-outer">
                            <div className="profile-box-inner">
                                <div className="profile-class-grey">Doctor</div>
                                <h2 className="profile-class-pink profile-class-near">Dr.Anuj Raj</h2>
                            </div>
                            <div className="profile-box-inner">
                                <button className="profile-allergies-button">Allergies</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}