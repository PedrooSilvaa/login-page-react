import { MainButton } from "../../component/button";
import { UsernamePasswordModal } from "./username-password-modal";

export function Login(){
    return (
        <div className="bg-[#2148C0] w-full h-[100vh] flex flex-col justify-center items-center ">
            <div className="border-2 p-20 rounded-3xl">
                <h1 className="text-[40px] text-center font-bold border-b border-white border-b-4 text-white">Sign In</h1>
                <form action="">
                    <UsernamePasswordModal/>
                    <MainButton text="LOGIN" typeButton="submit"/>
                </form>
            </div>
        </div>
    )
}