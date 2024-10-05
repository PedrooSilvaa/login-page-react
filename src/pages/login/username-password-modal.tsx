import { Lock, User } from "lucide-react";
import { UserInput } from "../../component/input";

export function UsernamePasswordModal(){
    return(
        <div>
            <form action="" className="mt-[70px]">
                <div className="flex flex-col gap-10">
                    <UserInput icon={<User className="size-8 text-white" />} title="USERNAME" type="text"></UserInput>
                    <UserInput icon={<Lock className="size-8 text-white" />} title="PASSWORD" type="password"></UserInput>
                </div>
            </form>
        </div>
    )
}