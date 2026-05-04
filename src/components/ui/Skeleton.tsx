import React, { type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    lines?: number;
    className?: string;
}

const Skeleton = ({ className, lines, ...props }: SkeletonProps) => {
    if (lines) {
        return (
            <div className="flex flex-col gap-2">
                {Array.from({ length: lines }).map((_, i) => (
                    <div key={i} className={cn("h-3.5 rounded-full bg-white/[0.06] animate-pulse", i === lines - 1 && "w-3/5", className)} />
                ))}
            </div>
        );
    }
    return <div className={cn("rounded-md bg-white/[0.06] animate-pulse", className)} {...props} />;
}

export default Skeleton