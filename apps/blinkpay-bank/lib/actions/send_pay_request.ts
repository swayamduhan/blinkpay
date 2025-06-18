import { PayParams } from "@/app/api/pay/route";
import axios from "axios";

export async function sendPayRequest(token : string, amount : number, setLoading : any){
    try{
        setLoading(true)
        const reqBody : PayParams = {
            token,
            amount
        }
        await axios.post("/api/pay", reqBody)
        alert("Payment success! Click OK in the alert to close bank window, Happy Banking :)")
        window.close()
    } catch ( err ) {
        console.log(err)
        alert("queue backend seems down, try again later :(")
        // add logic that bank will add the txn to its DB and fire again and again using background task
        // good to implement in a standalone server rather than a vercel serverless build
    } finally {
        setLoading(false)
    }
}