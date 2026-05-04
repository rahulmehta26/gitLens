import React, { memo } from "react";
import type { ActivityDataPoint } from "../../types/github.types";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import Card from "../ui/Card";
import Skeleton from "../ui/Skeleton";

interface ActivityChartProps {
    data?: ActivityDataPoint[] | undefined;
    loading: boolean;
}

const TOOLTIP_STYLE = {
    backgroundColor: "var(--color-primary)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    color: "var(--color-lime)",
    fontSize: 12,
};

const ActivityChart = memo(({ data, loading }: ActivityChartProps) => {
    return (
        <Card className="flex flex-col gap-0">
            <h2 className="text-lg pb-4 text-lime font-bold">
                Repository Activity by Year
            </h2>

            {loading ? (
                <Skeleton className="h-60 w-full rounded-xl" />
            ) : (
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart
                        data={data}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(0,0,0,0.04)"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="year"
                            tick={{ fill: "var(--color-lime)", fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fill: "var(--color-lime)", fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            contentStyle={TOOLTIP_STYLE}
                            cursor={{ fill: "rgba(255,255,255,0.03)" }}
                        />
                        <Legend
                            wrapperStyle={{ fontSize: 11, color: "var(--color-lime)" }}
                        />
                        <Bar
                            dataKey="count"
                            name="Repos Created"
                            fill="var(--color-text-primary)"
                            radius={[4, 4, 0, 0]}
                            fillOpacity={0.85}
                        />
                        <Bar
                            dataKey="stars"
                            name="Stars Earned"
                            fill="var(--color-lime)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </Card>
    );
});

export default ActivityChart;
