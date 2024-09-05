'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './style.css';
import Image from 'next/image';
import Register from '../register/page';
import axios from 'axios';
import '@fontsource/poppins'
export default function Login() {
    const router = useRouter();
    const [isEmailVisible, setEmailVisible] = useState(false);
    const [email,setEmail]=useState('');
    const [warning,setWarning]=useState('')

    async function handleGetOtp(){
        if(!email){ setWarning('please enter email first')
            setTimeout(() => {
                setWarning('');
            }, 3000);
            return;
        }
        try{
            const response = await axios.post('/api/getotp',{email:email})
            if(response.data.success){
                if(response.data.message === 'user not found'){
                    setWarning('user not found');
                    setTimeout(() => {
                        router.push('/register')
                        setWarning('');
                    }, 1000);
                }
               router.push(`/verification?id=${email}`)
            }
        }catch(e){}
    }

    return (
        <main className="login-main">
            <div className="login-image">
                <Image src={'/login-image.svg'} alt="logo" height={1000} width={1000} priority className="login-image-main" />
            </div>
            <div className="login-form">
                <div className="login-heading">
                    <h1>Login</h1>
                    <hr className="login-underline" />
                </div>
                <div className="login-user-input">
                {warning &&<p style={{color:'red',fontWeight:'bold'}}>{warning}</p>}
                    {isEmailVisible && <p className="login-email">Email / Mobile / Adhar</p>}
                    <br />
                    <input
                        type="text"
                        className="user-email"
                        placeholder={isEmailVisible ? "" : "Email / Mobile / Adhar"}
                        onClick={() => setEmailVisible(true)}
                        onBlur={() => setEmailVisible(false)}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <hr className="email-underline" />
                </div>
                <div className='getotp-button-cont'>
                    <button className="getotp-button" onClick={handleGetOtp}>Get OTP</button>
                </div>
                <div className='register-button-cont'>
                    <div className='dont-have-account-cont'>
                        <hr className='dont-have-account-above-line' />
                        <p className="dont-have-account">Don't have account</p>
                    </div>
                    <button className="register-button" onClick={() => router.push('/register')}>Register</button>
                </div>
            </div>
        </main>
    );
}
 