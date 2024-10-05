import { ReactNode } from "react";


interface UserInputProps
    extends React.InputHTMLAttributes<HTMLHtmlElement>{
        icon: ReactNode;
        title: string;
    }

export function UserInput(
    {
        icon,
        title
    }:UserInputProps
){
    return(

        <div className="flex flex-col gap-2">
            <div className="flex items-end gap-2">
                {icon}
                <h3 className="flex text-2x1 font-bold text-white"> {title}</h3>
            </div>
            <div className="">
                <input type="text" className="w-[300px] h-[45px] bg-transparent rounded-md border"/>            
            </div>
        </div>

    )
}

    