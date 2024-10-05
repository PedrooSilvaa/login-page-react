import { useNavigate } from "react-router-dom";
import { UserRegister } from "./user-register-modal";


export function Register(){

    const navigate = useNavigate();

    function loginPage(){
        navigate("/")
    }

    return(
        <div className="bg-[#2148C0] w-full h-[100vh] flex flex-col justify-center items-center ">
            <div className="border-2 p-20 rounded-3xl">
                <h1 className="text-[40px] text-center font-bold border-white border-b-4 text-white">REGISTER</h1>
                <UserRegister loginPage={loginPage}/>
            </div>
        </div>
    )
}