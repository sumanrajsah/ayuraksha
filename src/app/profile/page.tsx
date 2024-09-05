"use client"
import Image from "next/image";
import "./style.css";
import '@fontsource/poppins'
import axios from 'axios'

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
                                    height={100}
                                    width={100}
                                    className="profile-photo-class"
                                />
                            </div>
                            <div className="profile-name">
                                <h1>Ms. Neha</h1>
                            </div>
                        </div>
                        <div className="profile-emergency-contact">
                            <h2>Contact Details:</h2>
                            <small>Emergency contact</small>
                            <div className="profile-number">
                                <Image
                                    src={'icon-Phone.svg'}
                                    priority
                                    alt="photo"
                                    height={20}
                                    width={20}
                                    className="profile-photo-phone"
                                /> +91 99873 86637
                            </div>
                            <div className="profile-number">
                                <Image
                                    src={'icon-house.svg'}
                                    priority
                                    alt="photo"
                                    height={20}
                                    width={20}
                                    className="profile-photo-house"
                                />pratapgarh , haryana
                            </div>
                        </div>
                    </div>
                    <div className="profile-info-cont profile-box-border"></div>
                    <div className="profile-overview-cont profile-box-border"></div>
                    <div className="profile-history-cont profile-box-border"></div>
                </div>
            </div>
        </main>
    );
}