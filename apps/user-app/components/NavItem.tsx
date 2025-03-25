import { usePathname } from "next/navigation";
import { SwitchText } from "./SwitchText";

export function NavItem({ children }: Readonly<{ children: React.ReactNode }>){
    const pathname = usePathname()
    const selected = isPath(pathname, children?.toString() || "")
    return (
        <li className={`px-4 py-1 rounded-md ${selected ? "bg-gradient-to-r from-[#4f46e5] to-[#4f46e5ac] text-white" : "bg-[#DDDAFD]"}`}>
            <SwitchText>
                {children}
            </SwitchText>
        </li>
    )
}

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

function isPath(pathname: string, child: string): boolean {
    console.log(pathname)
    console.log(child)
    return pathMap[pathname] === child;
}