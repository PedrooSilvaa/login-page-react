import { User } from "lucide-react";
import { ArrowLeft } from "../../components/arrow-left";
import { UserInput } from "../../components/input";
import { MainButton } from "../../components/button";

interface ForgotPasswordStep1Props{
    forgotPassword2: () => void
    closeForgotPasswordStep1: () => void
}

export function ForgotPasswordStep1(
    {
        forgotPassword2,
        closeForgotPasswordStep1
    }:ForgotPasswordStep1Props
){
    return(
        <div>
            <div>
                <div className="mt-3">
                    <ArrowLeft back={closeForgotPasswordStep1}/>
                </div>
                <div className="mt-8 flex items-center flex-col">
                    <UserInput icon={<User className="size-8 text-white"/>} title="USERNAME" type="text"/>
                <MainButton text="AVANÇAR" typeButton="submit" onClick={forgotPassword2}/>
                </div>
            </div>
        </div>
    )
}