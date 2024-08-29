import Image from "next/image";
import "./style.css";
import '@fontsource/poppins'

export default function Register() {
    return (
        <main className="main">
            <form className="form">
                <div className="headContainer">
                <h1 className="heading">Registration
                <div className="roundLine"/>
                </h1>
                </div>
                <input type="text"  className="input" placeholder="First Name" />
                <input type="text"  className="input" placeholder="Last Name" />
                <input type="email"  className="input" placeholder="Email" />
                <input type="phone"  className="input" placeholder="Phone Number" />
                <input type="number"  className="input" placeholder="Aadhar no." />
                <input type="number"  className="input" placeholder="OTP" />
                <button type="submit" className="input otp_button" >Get OTP</button>
                <button type="submit" className="input submit_button">Submit</button>
            </form>
            <div className="image">
                <Image src={'login-image.svg'} priority alt="logo" height={1000} width={1000} className="logo"/>
            </div>
        </main>
    );
}
