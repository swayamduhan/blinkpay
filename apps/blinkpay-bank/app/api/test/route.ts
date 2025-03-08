import txnClient from "@/lib/grpc-client";
import { NextResponse } from "next/server";

export async function GET(){
    
    return NextResponse.json({ message : "ok" })
}