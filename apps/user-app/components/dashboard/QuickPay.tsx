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
        <div className="rounded-md relative overflow-hidden p-4 space-y-6">
            <GradientDecor />
            <MaskedText>
                <div className="text-3xl">
                    Quick Pay
                </div>
            </MaskedText>
            <div className="grid grid-cols-4 gap-3">
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
            <div className="border h-14 w-14 rounded-[50%] relative bg-gradient-to-r from-[#4f46e5cc] to-[#4f46e5ac] text-white font-semibold">
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