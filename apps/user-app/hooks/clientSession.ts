import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// usage: wrap the component in a SessionProvider wrapper then use this

export function useClientSession(){
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if(status === "unauthenticated"){
            router.push("/api/auth/signin?callbackUrl=/")
        } else if(status === "authenticated"){
            // update global state
        }
    }, [status])
}