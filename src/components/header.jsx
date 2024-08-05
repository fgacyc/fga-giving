import {HiOutlineMenuAlt2} from "react-icons/hi";

export default function Header(){
    return (
        <header className={"h-[74px] bg-white flex justify-between py-3 px-[18px] items-center"}>
            <img src="/logo-fga.png" alt="fga-logo" className={"h-[50px]"}/>
            <HiOutlineMenuAlt2 className={"h-[22px] w-[22px]"} />
        </header>
    )
}