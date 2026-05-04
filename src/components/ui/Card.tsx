import React, { type ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}

const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div
            className={cn(
                'w-full bg-white/10 backdrop-blur-md custom-shadow rounded-sm my-8 p-6 text-lime',
                "border-black border-2",
                "transition-colors duration-300",
                className
            )}
            {...props}
        >
            {
                children
            }
        </div>
    )
}

export default Card