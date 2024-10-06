import { Lock, User } from "lucide-react";
import { UserInput } from "../../components/input";
import { MainButton } from "../../components/button";

interface UserRegisterProps{
    loginPage: () => void
    register: () => void
    setUsername: (e: string) => void
    setPassword: (e: string) => void
    setName: (e: string) => void
}

export function UserRegister(
    {
        loginPage,
        register,
        setUsername,
        setPassword,
        setName
    }:UserRegisterProps
){
    return(
        <div className="mt-8">
            <div className="">
                <div className="flex flex-col gap-4">
                <UserInput setText={setName} icon={<User className="size-8 text-white"/>} title="NAME" type="text"/>
                <UserInput setText={setUsername} icon={<User className="size-8 text-white"/>} title="USERNAME" type="text"/>
                <UserInput setText={setPassword} icon={<Lock className="size-8 text-white"/>} title="PASSWORD" type="PASSWORD"/>
            </div>
            <div className="flex justify-end px-3">
                <button onClick={loginPage}>
                    <span className="text-white text-[10px] ">SIGN IN</span>
                </button>
            </div>
                <MainButton onClick={register} text="AVANÇAR" typeButton="submit"/>        
            </div>
        </div>
    )
}