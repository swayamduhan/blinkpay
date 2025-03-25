import { Variants } from "motion/react";
import { Currency } from "../Currency";
import { GradientDecor } from "../GradientDecor";
import { MaskedText } from "../MaskedText";
import { motion } from "motion/react"

const itemVariants : Variants = {
    "hidden" : {
        opacity: 0,
        x: "50px",
        filter: "blur(10px)"
    },
    "visible": {
        opacity: 1,
        x: "0px",
        filter: "blur(0px)"
    }
}
const containerVariants: Variants = {
    "hidden": {
        translateX: "20px",
        transition: {
            duration: 0.3
        }
    },
    "visible": {
        translateX: "0px",
        transition: {
            duration: 0.3,
            staggerChildren: 0.1
        }
    }
}

export function RecentActivity(){
    const items = [
        {
            name: "swayam",
            amount: "100",
            type: "DEBIT"
        },
        {
            name: "cheems",
            amount: "111",
            type: "CREDIT"
        },
        {
            name: "muuku",
            amount: "178",
            type: "CREDIT"
        },
        {
            name: "chicken",
            amount: "125",
            type: "DEBIT"
        },
    ]
    return (
        <div className="relative rounded-md w-full p-4 overflow-hidden space-y-8">
            <GradientDecor />
            <MaskedText>
                <div className="text-3xl ">
                    Recent Activity
                </div>
            </MaskedText>
            <motion.ul className="*:py-3 *:px-6 rounded-md relative z-4 space-y-2" variants={containerVariants} initial="hidden" animate="visible">
                {items.map((item, index) => (
                    <TxnItem key={index} user={item.name} amount={item.amount} type={item.type}/>
                ))}
            </motion.ul>
        </div>
    )
}

function TxnItem({ user, amount, type }: { user: string, amount: string, type: string }){
    let symbol = "+"
    let color = "#02940C"
    if(type == "DEBIT"){
        symbol = "-"
        color = "#A62121"
    }
    return (
        <motion.li className="border border-neutral-400 rounded-md flex items-center justify-between relative perspective-[100px] overflow-hidden" variants={itemVariants}>
            <div className="w-full h-4 absolute bottom-[20px] preserve-3d rotate-x-[50deg] opacity-50 blur-3xl" style={{ backgroundColor: color }}></div>
            <div className="space-y-[-5px]">
                <div className="font-medium text-xl">{user}</div>
                <div className="text-sm text-neutral-500 font-light">Paid on Thursday at 7:00pm</div>
            </div>
            <div className={`font-medium text-xl`} style={{ color }}>
                {symbol}<Currency>{amount}</Currency>
            </div>
        </motion.li>
    )
}