import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { GradientDecor } from "../GradientDecor";
import { Currency } from "../Currency";
import { MaskedText } from "../MaskedText";

export function MonthStats(){
    const data = [
        { name: 'Expenditure', value: 400 },
        { name: 'Income', value: 300 },
        { name: 'Savings', value: 300 },
    ];
    const COLORS = ['#A62121cc', '#02940Ccc', '#FFBB28cc'];

    return (
        <div className="rounded-md relative overflow-hidden p-4 space-y-6">
            <GradientDecor />
            <MaskedText>
                <div className="text-3xl">Stats for the month</div>
            </MaskedText>
            <div className="flex items-center justify-center h-[300px]">
                <ExpIncSavPieChart data={data} COLORS={COLORS}/>
            </div>
        </div>
    )
}

function ExpIncSavPieChart({ data, COLORS }: { data: { name: string, value: number }[], COLORS: string[] }){
    const renderLabel = ({ name, value, x, y }: any) => {
        return (
            <text x={x} y={y} fill="black" textAnchor="middle" fontSize={16} fontWeight={500}>
                {name} (<Currency>{value}</Currency>)
            </text>
        );
    };
    return (
        <PieChart width={400} height={400}>
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={130}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
            label={renderLabel}
            labelLine={false}
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Tooltip />
        </PieChart>
    )
}