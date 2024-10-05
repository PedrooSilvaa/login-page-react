import { User } from "lucide-react";
import { ArrowLeft } from "../../component/arrow-left";
import { UserInput } from "../../component/input";
import { MainButton } from "../../component/button";

interface ForgotPasswordStep2Props{
    updateForgotPassword: () => void
    closeForgotPasswordStep2: () => void
}

export function ForgotPasswordStep2(
    {
        updateForgotPassword,
        closeForgotPasswordStep2
    }:ForgotPasswordStep2Props
){
    return(
        <div>
            <div className="mt-3">
                <ArrowLeft back={closeForgotPasswordStep2}/>
            </div>
            <div className="mt-8 flex items-center flex-col">
                <UserInput icon={<User className="size-8 text-white"/>} title="USERNAME" type="text"/>
                <UserInput icon={<User className="size-8 text-white"/>} title="NEW PASSWORD" type="text"/>
                <UserInput icon={<User className="size-8 text-white"/>} title="CONFIRM PASSWORD" type="text"/>
                <MainButton text="AVANÇAR" typeButton="submit" onClick={updateForgotPassword}/>
            </div>
        </div>
    )
}