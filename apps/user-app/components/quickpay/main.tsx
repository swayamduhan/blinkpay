"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { MaskedText } from "../MaskedText";
import axios from "axios";

export function QuickPayContent({ favs, recs } : {favs: any[], recs: any[]}){
    return (
        <div>
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
                    Favorites
                </div>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    {favs.map((person, idx) => (
                        <QuickPayRecipient key={`recent-person-${idx}`} id={person.id} name={person.name} avatar={person.avatar} mobile={person.mobile}/>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <div className="text-xl text-accent-main/60">
                    Recents
                </div>
                <div className="grid grid-cols-5 gap-4 mt-4">
                    {recs.map((person, idx) => (
                        <QuickPayRecipient key={`recent-person-${idx}`} id={person.id} name={person.name} avatar={person.avatar} mobile={person.mobile}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

function QuickPayRecipient({ id, name, avatar, mobile }: { id: number, name: string, avatar: string | undefined, mobile: string }){
    return (
        <div className="flex gap-4 items-center border p-4 rounded-md border-accent-background cursor-pointer group hover:bg-accent-light/10">
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