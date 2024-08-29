'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './style.css';
import Image from 'next/image';
import Register from '../register/page';

export default function Login() {
    const router = useRouter();
    const [isEmailVisible, setEmailVisible] = useState(false);

    return (
        <main className="login-main">
            <div className="login-heading">
                <h1>Login</h1>
                <hr className="login-underline" />
            </div>
            <div className="image">
                <Image src={'/login-image.svg'} alt="logo" height={650} width={1000} priority className="logo" />
            </div>
            <div className="mobile">
                {isEmailVisible && <p className="email">Email / Mobile / Adhar</p> }
                <br/>
                <input
                    type="text"
                    className="user-email"
                    placeholder="Email / Mobile / Adhar"
                    onClick={() => setEmailVisible(true)}
                    onBlur={() => setEmailVisible(false)}
                />
                <hr className="email-underline" />
            </div>
            <button className="getotp" onClick={() => router.push('/getOTP')}>Get OTP</button><br />
            <button className="register" onClick={() => router.push('/register')}>Register</button>
        </main>
    );
}
