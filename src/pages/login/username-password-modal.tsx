import { Lock, User } from "lucide-react";
import { UserInput } from "../../component/input";
import { MainButton } from "../../component/button";

interface UsernamePasswordModalProps{
    openForgotPassword: () => void
    registerPage: () => void
}

export function UsernamePasswordModal(
    {
        openForgotPassword,
        registerPage
    }:UsernamePasswordModalProps
){
    return(
        <div>
            <form action="" className="mt-[70px]">
                <div className="">
                    <div className="flex flex-col gap-10">
                        <UserInput icon={<User className="size-8 text-white" />} title="USERNAME" type="text"></UserInput>
                        <UserInput icon={<Lock className="size-8 text-white" />} title="PASSWORD" type="password"></UserInput>
                    </div>
                    <div className="flex justify-between p-0 m-0">
                        <button onClick={registerPage}>
                            <span className="text-white text-[10px] ">SIGN UP</span>
                        </button>
                        <button onClick={openForgotPassword}>
                            <span className="text-white text-[10px] ">FORGOT PASSWORD</span>
                        </button>
                    </div>
                </div>
                <MainButton text="LOGIN" typeButton="submit" onClick={()=>alert("Login Feito")}/>
            </form>
        </div>
    )
}