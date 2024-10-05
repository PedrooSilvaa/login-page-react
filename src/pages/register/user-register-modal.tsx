import { Lock, User } from "lucide-react";
import { UserInput } from "../../component/input";
import { MainButton } from "../../component/button";

interface UserRegisterProps{
    loginPage: () => void
}

export function UserRegister(
    {
        loginPage
    }:UserRegisterProps
){
    return(
        <div className="mt-8">
            <div className="">
                <div className="flex flex-col gap-4">
                <UserInput icon={<User className="size-8 text-white"/>} title="NAME" type="text"/>
                <UserInput icon={<User className="size-8 text-white"/>} title="USERNAME" type="text"/>
                <UserInput icon={<Lock className="size-8 text-white"/>} title="PASSWORD" type="PASSWORD"/>
                <UserInput icon={<Lock className="size-8 text-white"/>} title="CONFIRM PASSWORD" type="PASSWORD"/>    
            </div>
            <div className="flex justify-end">
                <button onClick={loginPage}>
                    <span className="text-white text-[10px] ">SIGN IN</span>
                </button>
            </div>
                <MainButton onClick={()=> alert("User")} text="AVANÇAR" typeButton="submit"/>        
            </div>
        </div>
    )
}