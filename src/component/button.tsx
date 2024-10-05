
interface MainButtonProps {
        typeButton: "reset" | "submit" | "button";
        text: string;
        onClick: () => void;
    }

export function MainButton(
    {
        typeButton,
        text,
        onClick
    }:MainButtonProps
){

    return(
        <div className="mt-11">
            <button onClick={onClick} type={typeButton} className="bg-[#ffffff] text-[#2148C0] font-bold w-[300px] h-[45px] rounded-xl">
                <span>{text}</span>
            </button>
        </div>
    )

}