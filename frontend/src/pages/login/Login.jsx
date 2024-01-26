import React, { useState } from 'react'
// import "./Login.css"
import { Link, } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaRocket } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const Login = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = async () => {
        try {
            const res = await fetch("http://localhost:5000/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                })
            })
            const data = await res.json()
            if (data.error) {
                setError(data.error)
            }
            else {
                localStorage.setItem("username", data.username)
                localStorage.setItem("id", data._id)
                localStorage.setItem("email", data.email)

                navigate("/home")
            }
        }
        catch (err) {
            console.log(err)
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
            <div className=' absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center h-[48px] w-[275px] rounded-[1000px] border-2 border-white '>
            <input
                            type="email"
                            id="email"
                            placeholder="Enter your Email"
                            className="inp bg-transparent h-full w-full rounded-[1000px] text-white text-center"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
            </div>
            <div className=' absolute top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center h-[48px] w-[275px] rounded-[1000px] border-2 border-white'>
                            <input
                             type="password"
                             placeholder="Enter your Password"
                             id="password"
                             className="inp bg-transparent h-full w-full rounded-[1000px] text-center text-white border-white"
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                         />
            </div>
            
            <div className="error absolute text-white top-[44%] left-[20%]">{error}</div>
            <div className='group absolute top-[72%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[275px] rounded-[1000px] border-2 border-white text-center'>
                <button onClick={submitHandler} className="login_button btn  h-[48px] w-[275px] rounded-[1000px] font-semibold group-hover:font-extrabold ">
                         <div className="login_text btn text-white ">Continue <span className=' absolute w-[20px] h-[20px] mt-[1%] ml-[3%] group-hover:grow-2 '><FaArrowRight className=' h-[20px] ' /></span></div>
               </button>              
            </div>

            <div className=' absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white'>
            <div className="register ">
                     Don’t have an Account ?{" "}
                     <Link to={"/signup"} className="register_text text-blue-800">
                        Register
                     </Link>
                 </div>      
            </div>

           
        </div>
    </div>
</div>


   </>

    )
}

export default Login