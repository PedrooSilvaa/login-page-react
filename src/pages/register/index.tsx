import { useNavigate } from "react-router-dom";
import { UserRegister } from "./user-register-modal";
import { api } from "../../lib/axios";
import { useState } from "react";


export function Register(){

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    function loginPage(){
        navigate("/")
    }

    async function registerUser() {
        console.log(name, username, password)
        await api.post("/users", {
            name, username, password
        })
            .then(async (json) => {
                console.log(json.data.username);
                navigate("/")
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    return(
        <div className="bg-[#2148C0] w-full h-[100vh] flex flex-col justify-center items-center ">
            <div className="border-2 p-20 rounded-3xl">
                <h1 className="text-[40px] text-center font-bold border-white border-b-4 text-white">REGISTER</h1>
                <UserRegister 
                loginPage={loginPage}
                setUsername={setUsername}
                setPassword={setPassword}
                setName={setName}
                register={registerUser}
                />
            </div>
        </div>
    )
}