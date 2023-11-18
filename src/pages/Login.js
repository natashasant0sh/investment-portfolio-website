import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import 'tailwindcss/tailwind.css'

function Login() {

    const history=useNavigate();

    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/pages/Login",{
                name,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/dashboard",{state:{id:name}})
                }
                else if(res.data=="wrong password"){
                    alert("Incorrect password")
                }
                else if(res.data=="notexist"){
                    alert("User has not signed up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md w-80">
                <h1 className="mb-4 text-xl font-bold text-center">Login</h1>
                <form action="POST">
                    <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name" className="mb-3 w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className="mb-3 w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    <input type="submit" onClick={submit} className="w-full px-3 py-2 text-white bg-green-500 rounded-md cursor-pointer hover:bg-green-600" />
                </form>
                <div className="mt-4 text-center">
                    <p>Don't have an account?</p>
                    <Link to="/pages/SignUp" className="block w-full px-3 py-2 mt-2 text-center text-white bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login