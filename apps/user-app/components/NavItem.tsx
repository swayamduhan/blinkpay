import { usePathname, useRouter } from "next/navigation";
import { SwitchText } from "./SwitchText";
import { signOut } from "next-auth/react";

const pathMap: Record<string, string> = {
    "/": "Dashboard",
    "/quickpay": "Quick Pay",
    "/addmoney": "Add Money",
    "/wallet": "Wallet",
    "/chat": "Chat",
    "/history": "Transaction History",
    "/profile": "Profile",
    "/settings": "Site Settings",
    "/logout": "LogOut"
};

function getKeyByValue<T extends Record<string, any>>(object: T, value: T[keyof T] | undefined): keyof T | undefined {
  return (Object.keys(object) as Array<keyof T>).find(key => object[key] === value);
}

export function NavItem({ children }: Readonly<{ children: React.ReactNode  }>){
    const pathname = usePathname()
    const selected = isPath(pathname, children?.toString() || "")
    const router = useRouter()

    function handleClick(value: string){
        if(value === ""){
            return
        }

        const path = getKeyByValue(pathMap, value)
        if(path == "/logout"){
            signOut({
                callbackUrl: "https://blinkpay.swayd.live"
            })
            return
        }
        if(path){
            router.push(path)
        } else {
            console.error("unknown navigation path")
        }
}

    return (
        <li className={`px-4 py-1 rounded-md ${selected ? "bg-gradient-to-r from-accent-main to-accent-light text-white" : "bg-[#DDDAFD]"}`} onClick={() => {
            handleClick(children?.toString() || "")
        }}>
            <SwitchText>
                {children}
            </SwitchText>
        </li>
    )
}


function isPath(pathname: string, child: string): boolean {
    return pathMap[pathname] === child;
}

