"use client"
import { GradientDecor } from "../GradientDecor";
import { MaskedText } from "../MaskedText";

export function QuickPayTile(){
    const friends = [
        {
            avatar: undefined,
            name: "swayam"
        },        {
            avatar: undefined,
            name: "no$"
        },        {
            avatar: undefined,
            name: "richkid"
        },        {
            avatar: undefined,
            name: "jake"
        },        {
            avatar: undefined,
            name: "colon"
        },        {
            avatar: undefined,
            name: "kai"
        }
    ]

    return (
        <div className="rounded-md relative overflow-hidden p-4 space-y-6 border border-accent-background">
            <GradientDecor />
            <MaskedText>
                <div className="text-3xl">
                    Quick Pay
                </div>
            </MaskedText>
            <div className="grid grid-cols-5 gap-3 -space-y-5">
                {friends.map((friend, index) => (
                    <FriendTile key={index} avatar={friend.avatar || ""} name={friend.name}/>
                ))}
            </div>
        </div>
    )
}

function FriendTile({ avatar, name }: { avatar: string, name: string }){
    return (
        <div className="p-4 flex flex-col items-center justify-center cursor-pointer">
            <div className="border h-14 w-14 rounded-md relative bg-gradient-to-r from-[#4f46e5cc] to-[#4f46e5ac] bottom-0 text-accent-background font-semibold text-3xl hover:bottom-[2px] transition-all duration-200">
                {avatar == "" ? (
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        {name[0]}
                    </div>
                ) : (
                    <div>Put image here</div>
                )}
            </div>
            <div>{name}</div>
        </div>
    )
}