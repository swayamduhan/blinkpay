import { usePathname, useRouter } from "next/navigation";
import { SwitchText } from "./SwitchText";

const pathMap: Record<string, string> = {
    "/": "Dashboard",
    "/quickpay": "Quick Pay",
    "/addmoney": "Add Money",
    "/wallet": "Wallet",
    "/chat": "Chat",
    "/history": "Transaction History",
    "/profile": "Profile",
    "/settings": "Settings",
};

function getKeyByValue<T extends Record<string, any>>(object: T, value: T[keyof T] | undefined): keyof T | undefined {
  return (Object.keys(object) as Array<keyof T>).find(key => object[key] === value);
}

export function NavItem({ children }: Readonly<{ children: React.ReactNode }>){
    const pathname = usePathname()
    const selected = isPath(pathname, children?.toString() || "")
    const router = useRouter()

    return (
        <li className={`px-4 py-1 rounded-md ${selected ? "bg-gradient-to-r from-accent-main to-accent-light text-white" : "bg-[#DDDAFD]"}`} onClick={() => {
            const path = getKeyByValue(pathMap, children?.toString())
            if(path) router.push(path)
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