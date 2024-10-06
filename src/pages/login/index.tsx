import { useState } from "react";
import { UsernamePasswordModal } from "./username-password-modal";
import { ForgotPassword } from "./forgot-password";
import {useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";


export function Login(){

    const [isVisibleForgotPassword, setIsVisibleForgotPassword] = useState(false);
    const [title, setTitle] = useState("Sign In");
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function authLogin(e) {
        e.preventDefault();
        await api.post("/auth", {
            username, password
        })
            .then(async (json) => {
                alert(json.data.token)
            })
            .catch((err) => {
                console.log(err.response.status);
                console.log(username, password)
                navigate("/")
            
            })
    }

    function openForgotPassword(){
        setIsVisibleForgotPassword(true);
        setTitle("Forgot Password")
    }
    function closeForgotPassword(){
        setIsVisibleForgotPassword(false);
        setTitle("Sign In")
    }
    function registerPage(){
        navigate('/register')
    }

    
    return (
        <div className="bg-[#2148C0] w-full h-[100vh] flex flex-col justify-center items-center ">
            <div className="border-2 p-20 rounded-3xl">
                <h1 className="text-[40px] text-center font-bold border-white border-b-4 text-white">{title}</h1>
                {isVisibleForgotPassword ? (
                    <ForgotPassword closeForgotPassword={closeForgotPassword}/>
                ):(
                    <UsernamePasswordModal
                    openForgotPassword={openForgotPassword}
                    registerPage={registerPage}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    login={authLogin}/>
                )}
            </div>
                    
        </div>
    )
}