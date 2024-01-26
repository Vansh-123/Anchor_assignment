import React, { useState } from 'react'
// import "./Signup.css"
import { Link } from 'react-router-dom'
import Otp from "../../components/otp/Otp.jsx"
import emailjs from "@emailjs/browser";
import { FaRocket } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Signup = () => {
    const [error, setError] = useState("")
    const [otp, setOtp] = useState(true)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [optvalue, setOptvalue] = useState("")
    const [id, setId] = useState("")
    
    emailjs.init("ZmlOu02Mg0Zw5rQEg");
    const registerHandler = async () => {
        if (!username || !email || !password) {
            setError("Please fill all the fields");
        } else {
            const res = await fetch("http://localhost:5000/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await res.json();
            if (data.error) {
                setError(data.error);
            } else {
                setId(data._id)
                setOptvalue(data.otp)
                localStorage.setItem("_id", data._id);
                localStorage.setItem("username", data.username);
                localStorage.setItem("email", data.email);
                emailjs.send("service_h74oqqf","template_zqdhp1p", {
                    user_name: username,
                    email: email,
                    otp: data.otp,
                });
                setOtp(false);
            }
        }
    };
    return (
       <>
         <div className="container bg-black h-screen w-full relative flex justify-center font-[Public Sans]">
         {otp ?
    <div className='h-full w-[80%] relative flex justify-center items-center'>
        <div className='login_ bg-zinc-900 h-[429px] w-[387px] relative border-2 border-transparent  rounded-2xl'>
                <div className='text-white items-center  mt-[46px] ml-[190px] relative'>
                <FaRocket className='w-[19.5px] h-[19.5px] '/>
                </div>
            <div className=' absolute top-[98px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center font-bold'>
                <h1 className='text-white text-2xl'>Create Your Account</h1>
            </div>
            <div className=' absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center h-[48px] w-[275px] rounded-[1000px] border-2 border-white '>
            <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter your user name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                
                                    className="inp bg-transparent h-full w-full rounded-[1000px] text-white text-center"
                                />
            </div>
            <div className=' absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center h-[48px] w-[275px] rounded-[1000px] border-2 border-white '>
            <input
                            type="email"
                            id="email"
                            placeholder="Enter your Email"
                            className="inp bg-transparent h-full w-full rounded-[1000px] text-white text-center"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
            </div>
            <div className=' absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center h-[48px] w-[275px] rounded-[1000px] border-2 border-white'>
                            
                                <input
                                    type="password"
                                    placeholder="Enter your Password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="inp bg-transparent h-full w-full rounded-[1000px] text-white text-center"
                                />
            </div>
            {error && <div className='error  text-white'>{error}</div>}
            <div className='group absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[275px] rounded-[1000px] border-2 border-white text-center'>
                <button onClick={registerHandler} className="login_button btn  h-[48px] w-[275px] rounded-[1000px] font-semibold group-hover:font-extrabold ">
                         <div className="login_text btn text-white ">Register <span className=' absolute w-[20px] h-[20px] mt-[1%] ml-[3%] group-hover:grow-2 '><FaArrowRight className=' h-[20px] ' /></span></div>
               </button>              
            </div>

            <div className=' absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white'>
            <div className="register ">
                      have an Account ?{" "}
                     <Link to={"/login"} className="register_text text-blue-800">
                        Login
                     </Link>
                 </div>      
            </div>

           
        </div>
    </div>: <Otp otp={optvalue} username={username} email={email} id={id} />}
</div>

       </>
    )
}

export default Signup