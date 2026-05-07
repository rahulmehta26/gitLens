import React, { memo } from "react";
import Card from "../ui/Card";
import type { LanguageStat } from "../../types/github.types";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector, Tooltip, type SectorProps } from "recharts";
import Skeleton from "../ui/Skeleton";

interface LanguageChartProps {
    data: LanguageStat[];
    loading: boolean;
}

const TOOLTIP_STYLE = {
    backgroundColor: "#0d0d0d",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    color: "#f4f4f5",
    fontSize: 12,
};

const LanguageChart = memo(({ data, loading }: LanguageChartProps) => {
    return (
        <Card className="flex flex-col gap-0">
            <h2 className="text-lg pb-4 text-lime font-bold">Language Breakdown</h2>
            {
                loading ? (
                    <div
                        className="flex mt-10 justify-center items-center gap-8"
                    >
                        <Skeleton className="size-40 rounded-full" />

                        <div
                            className="space-y-4"
                        >
                            <Skeleton className="w-32 h-2" />
                            <Skeleton className="w-32 h-2" />
                            <Skeleton className="w-32 h-2" />
                            <Skeleton className="w-32 h-2" />

                        </div>

                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <ResponsiveContainer width="100%" height={220}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={3}
                                    stroke="none"
                                    shape={(props: SectorProps & { payload?: LanguageStat }) => {
                                        const { payload, ...rest } = props;
                                        return (
                                            <Sector
                                                {...rest}
                                                fill={payload?.color}
                                                stroke="none"
                                                strokeWidth={0}
                                                opacity={0.9}
                                            />
                                        );
                                    }}
                                />
                                <Tooltip
                                    contentStyle={TOOLTIP_STYLE}
                                    formatter={(value, name) => [
                                        `${value ?? 0} repos`,
                                        name
                                    ]}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <ul className="flex flex-col gap-2 min-w-[160px]">
                            {data.slice(0, 8).map((l) => (
                                <li
                                    key={l.name}
                                    className="flex items-center justify-between gap-3 text-xs"
                                >
                                    <span className="flex items-center gap-1.5 text-white/60 min-w-0">
                                        <span
                                            className="size-2 rounded-full shrink-0"
                                            style={{ background: l.color }}
                                        />
                                        <span className="truncate text-lime font-semibold">
                                            {l.name}
                                        </span>
                                    </span>
                                    <span className="text-lime/35 font-semibold shrink-0">
                                        {l.pct}%
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
        </Card>
    );
});

export default LanguageChart;
