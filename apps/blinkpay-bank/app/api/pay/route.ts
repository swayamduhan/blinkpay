// user clicks on pay, bank sets its status with a 85% chance of being success as just a mock
// bank pushes the status onto the redis queue deployed on another server
// the workers pick up and send over to webhook service of blinkpay
// if webhook is down, set it again in the queue and retry later

import { NextRequest, NextResponse } from "next/server";

interface PayParams {
    token : string;
}

async function POST(req : NextRequest) {
    const body : PayParams = await req.json()
    const token = body.token

    if (!token){
        return NextResponse.json("invalid request")
    }

    // simulate success
    const isSuccess = Math.random() < 0.85

    try {
        // grpc call to queue-worker
    } catch(e) {

    }
}