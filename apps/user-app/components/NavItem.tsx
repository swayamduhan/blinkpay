import { usePathname, useRouter } from "next/navigation";
import { SwitchText } from "./SwitchText";
import { signOut } from "next-auth/react";

export function NavItem({ children, href }: Readonly<{ children: React.ReactNode, href: string  }>){
    const pathname = usePathname()
    const selected = pathname == href
    const router = useRouter()

    function handleClick(){
        if(href == "/logout"){
            signOut({
                callbackUrl: "https://blinkpay.swayd.live"
            })
            return
        }
        router.push(href)
}

    return (
        <li className={`px-4 py-2 rounded-md ${selected ? "bg-gradient-to-r from-accent-main to-accent-light text-white" : "bg-[#DDDAFD]"}`} onClick={handleClick}>
            <SwitchText>
                {children}
            </SwitchText>
        </li>
    )
}

