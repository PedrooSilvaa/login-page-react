import { ArrowLeftCircle } from "lucide-react";

interface ArrowLeftProps{
    back: () => void
}

export function ArrowLeft(
    {
        back
    }:ArrowLeftProps
){
    return(
        <div>
            <button onClick={back}>
                <ArrowLeftCircle className="size-8"/>
            </button>
        </div>
    )
}