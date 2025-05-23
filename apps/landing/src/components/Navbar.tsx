import { NavItem } from "./NavItem"
import StarImage from "../assets/star.webp"

export function Navbar(){
    return (
        <div className="py-10 px-10 flex justify-between items-center text-xl">
            <div className="text-5xl font-instrument">
                BlinkPay
            </div>
            <div>
                <img src={StarImage} width={40}/>
            </div>
            <div className="flex gap-20 [&>div]:cursor-pointer">
                <NavItem>About</NavItem>
                <NavItem>Services</NavItem>
                <NavItem>Blinkpay for Business</NavItem>
                <NavItem>Contact</NavItem>
                <NavItem>Signup</NavItem>
                <div>Menu</div>
            </div>
        </div>
    )
}