"use client"
import { GradientDecor } from "../GradientDecor";
import { MaskedText } from "../MaskedText";

export function Chats(){
    return (
        <div className="rounded-md h-[400px] relative overflow-hidden p-4 border border-accent-background">
            <GradientDecor />
            <div className="text-3xl">
                <MaskedText>Chats</MaskedText>
                <MaskedText>Under Development</MaskedText>
                <MaskedText>Setting up Websocket rooms!</MaskedText>
            </div>
        </div>
    )
}