import { type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { motion, type HTMLMotionProps } from "motion/react"

type Variant = "primary" | "outline" | "danger" | "ghost";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    className?: string;
    variant?: Variant;
}

const variants: Record<Variant, string> = {

    primary: "bg-text-dim hover:bg-secondary border-white",
    outline: "bg-transparent border-text-dim hover:border-lime",
    danger: "border-danger hover:border-danger-secondary bg-danger-secondary hover:bg-danger",
    ghost: ""
}

const Button: React.FC<ButtonProps> = (
    ({ children, variant = "primary", className, ...props }) => (
        <motion.button
            className={cn(
                "py-3 overflow-hidden relative px-6",
                "flex justify-center items-center gap-4 cursor-pointer ",
                "transition-all duration-300 ease-in-out",
                "font-semibold hover:shadow-none custom-shadow",
                variant === "ghost" ? " p-0" : "border-2 rounded-full",
                className,
                variants[variant],
            )}
            {...props}

            initial="initial"
            whileHover="hover"
        >

            {children}

        </motion.button>
    )
);

export default Button;