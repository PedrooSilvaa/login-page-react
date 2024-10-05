
import { useState } from "react";
import { ForgotPasswordStep1 } from "./forgot-password-step1";
import { ForgotPasswordStep2 } from "./forgot-password-step2";

interface ForgotPasswordProps
    extends React.InputHTMLAttributes<HTMLHtmlElement>{
        closeForgotPassword: () => void
    
}

export function ForgotPassword(
    {
        closeForgotPassword
    }:ForgotPasswordProps
){
    
    const [isVisibleForgotPasswordStep2, setIsVisibleForgotPasswordStep2] = useState(false);

    function openForgotPasswordStep2(){
        setIsVisibleForgotPasswordStep2(true);
    }
    

    function closeForgotPasswordStep2(){
        setIsVisibleForgotPasswordStep2(false);
    }



    return(
        <div>
            {isVisibleForgotPasswordStep2 ? (
                <ForgotPasswordStep2 closeForgotPasswordStep2={closeForgotPasswordStep2} updateForgotPassword={closeForgotPassword}/>
            ):(
                <ForgotPasswordStep1 forgotPassword2={openForgotPasswordStep2} closeForgotPasswordStep1={closeForgotPassword}/>
            )}
        </div>
    )
}