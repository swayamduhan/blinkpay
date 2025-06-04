import { Button } from "../../../components/Button";
import { GradientDecor } from "../../../components/GradientDecor";
import { MaskedText } from "../../../components/MaskedText";
import { SwitchText } from "../../../components/SwitchText";
import { WalletSummary } from "../../../components/WalletSummary";

interface recentListItem {
    name: string;
    mobile: string;
    avatar: string | undefined;
}

const recentsList: recentListItem[] = [
    {
        name: "Swayam",
        avatar: undefined,
        mobile: "9958015496"
    },
        {
        name: "Swayam",
        avatar: undefined,
        mobile: "9958015496"
    },
        {
        name: "Swayam",
        avatar: undefined,
        mobile: "9958015496"
    },
        {
        name: "Swayam",
        avatar: undefined,
        mobile: "9958015496"
    }
]

export default function QuickPayPage(){
    return (
        <div className="space-y-8">
            <h1 className="text-[40px] mb-10">
                <MaskedText>
                    Quick Pay
               </MaskedText>
            </h1>
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 rounded-md h-[400px] relative overflow-hidden p-4 border border-accent-background">
                    <GradientDecor />
                    <div className="">
                        <div className="text-3xl">
                            <MaskedText>
                                Search Recipient
                            </MaskedText>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <input type="text" placeholder="Enter name / mobile" className="border px-2 py-1 rounded-md w-full text-lg"/>
                            <Button>Search</Button>
                            <Button>Clear</Button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-xl text-accent-main/60">
                            Recents
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {recentsList.map((person, idx) => (
                                <RecentPerson key={`recent-person-${idx}`} name={person.name} avatar={person.avatar} mobile={person.mobile}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <WalletSummary />
                </div>
            </div>
        </div>
    )
}

function RecentPerson({ name, avatar, mobile }: { name: string, avatar: string | undefined, mobile: string }){
    return (
        <div className="flex gap-4 items-center border p-4 rounded-md border-accent-background cursor-pointer group">
            <div className="rounded-md h-12 w-12 bg-gradient-to-r from-[#4f46e5cc] to-[#4f46e5ac] text-accent-background font-semibold text-4xl grid place-items-center relative group-hover:translate-x-[2px] duration-200 transition-all ease-out">
                {avatar || name[0]}
            </div>
            <div className="flex flex-col group-hover:-translate-x-[2px] duration-200 transition-all ease-out">
                <div className="text-xl">
                    {name}
                </div>
                <div className="text-accent-main/70 text-sm">
                    {mobile}
                </div>
            </div>
        </div>
    )
}