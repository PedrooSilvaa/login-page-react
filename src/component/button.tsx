
interface MainButtonProps {
        typeButton: "reset" | "submit" | "button";
        text: string;
    }

export function MainButton(
    {
        typeButton,
        text
    }:MainButtonProps
){

    return(
        <div className="mt-11">
            <button type={typeButton} className="bg-[#ffffff] text-[#2148C0] font-bold w-[300px] h-[45px]">
                <span>{text}</span>
            </button>
        </div>
    )

}