import React, { useState } from 'react'
import "./Otp.css"
import { useNavigate } from "react-router-dom"
import { FaRocket } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const Otp = ({ otp, id, username, email }) => {
    const navigate = useNavigate();
    const [optv, setOptv] = useState("")
    const handleClick = () => {
        if (otp === optv) {
            localStorage.setItem("id", id);
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            navigate("/");
        }
    }
    return (
        <>
                <div className="container bg-black h-screen w-full relative flex justify-center font-[Public Sans]">
    <div className='h-full w-[80%] relative flex justify-center items-center'>
        <div className='login_ bg-zinc-900 h-[429px] w-[387px] relative border-2 border-transparent  rounded-2xl'>
                <div className='text-white items-center  mt-[46px] ml-[190px] relative'>
                <FaRocket className='w-[19.5px] h-[19.5px] '/>
                </div>
            <div className=' absolute top-[98px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center font-bold'>
                <h1 className='text-white text-2xl'>Create Your Account</h1>
            </div>
            <div className='absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[254px] h-[32px] text-center'>
            <h1 className='text-white text-sm'>
                Please verify your email ID to continue<br />
                We have sent an OTP to this {email}
            </h1>
            </div>

            <div className=' absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center h-[48px] w-[275px] rounded-[1000px] border-2 border-white '>
            <input type="text" className=" bg-transparent h-full w-full rounded-[1000px] text-center text-white border-white"
                        value={optv}
                        onChange={(e) => setOptv(e.target.value)}
                        placeholder='Enter OTP'
                    />
            </div>
            
            <div className='bg-zinc-900/50 group absolute top-[72%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[275px] rounded-[1000px] border-2 border-white text-center'>
                <button onClick={handleClick} className="login_button btn  h-[48px] w-[275px] rounded-[1000px] font-semibold group-hover:font-extrabold ">
                         <div className="login_text btn text-white ">Continue <span className=' absolute w-[20px] h-[20px] mt-[1%] ml-[3%] group-hover:grow-2 '><FaArrowRight className=' h-[20px] ' /></span></div>
               </button>              
            </div>
           
        </div>
    </div>
</div>

      
        {/* <div className='otp'>
            <div className="otp_main">
                <div className="otp_text">Enter the OTP sent to your Email</div>
                <div className="otp_inp">
                    <input type="text" className="otp_input"
                        value={optv}
                        onChange={(e) => setOptv(e.target.value)}
                    />
                </div>
                <div className="otp_button" onClick={handleClick}>Submit</div>
            </div>
        </div> */}
        </>
    );
}

export default Otp