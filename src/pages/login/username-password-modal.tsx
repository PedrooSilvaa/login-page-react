import { Lock, User } from "lucide-react";
import { UserInput } from "../../components/input";
import { MainButton } from "../../components/button";

interface UsernamePasswordModalProps{
    openForgotPassword: () => void
    registerPage: () => void
    setUsername: (e: string) => void
    setPassword: (e: string) => void
    login: () => void
}

export function UsernamePasswordModal(
    {
        openForgotPassword,
        registerPage,
        setUsername,
        setPassword,
        login
    }:UsernamePasswordModalProps
){
    return(
        <div>
            <form action="" className="mt-[70px]">
                <div className="">
                    <div className="flex flex-col gap-10">
                        <UserInput icon={<User className="size-8 text-white" />} title="USERNAME" type="text" setText={setUsername}></UserInput>
                        <UserInput icon={<Lock className="size-8 text-white" />} title="PASSWORD" type="password" setText={setPassword}></UserInput>
                    </div>
                    <div className="flex justify-between px-3">
                        <button onClick={registerPage}>
                            <span className="text-white text-[10px] ">SIGN UP</span>
                        </button>
                        <button onClick={openForgotPassword}>
                            <span className="text-white text-[10px] ">FORGOT PASSWORD</span>
                        </button>
                    </div>
                </div>
                <MainButton text="LOGIN" typeButton="submit" onClick={login}/>
            </form>
        </div>
    )
}