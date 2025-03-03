import { NextRequest } from "next/server";

// 1. send withdrawal request to bank with user's bank details and a token will be returned
// 2. 

interface WithdrawalRequestParams {
    amount : string;
    userId : number;
    token : string;
    provider : string;
}

export async function POST(req : NextRequest){
    
}