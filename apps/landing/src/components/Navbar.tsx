import { NavItem } from "./NavItem"
import StarImage from "../assets/star.webp"

export function Navbar(){
    return (
        <div className="py-10 px-10 flex justify-between items-center text-lg lg:text-xl">
            <div className="text-4xl lg:text-5xl font-instrument">
                BlinkPay
            </div>
            <div className="nav-star">
                <img src={StarImage} className="w-[30px] lg:w-[40px]"/>
            </div>
            <div className="flex gap-10 lg:gap-20 [&>div]:cursor-pointer">
                <a href="#why-blinkpay">
                    <NavItem>About</NavItem>    
                </a>
                <NavItem>Services</NavItem>
                <NavItem>Blinkpay for Business</NavItem>
                <a href="#footer">
                    <NavItem>Contact</NavItem>
                </a>
                <NavItem>Signup</NavItem>
                <div className="nav-item">Menu</div>
            </div>
        </div>
    )
}