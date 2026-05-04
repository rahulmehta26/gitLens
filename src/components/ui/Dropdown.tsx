import { useState, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../utils/cn";
import Button from "./Button";
import Chevron from "../icons/Chevron";

export interface Option {
    label: string;
    value: string;
}

interface DropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

const Dropdown = memo(function Dropdown({
    options,
    value,
    onChange,
    placeholder = "Select...",
    className,
}: DropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const selected = options.find((opt) => opt.value === value);

    useEffect(() => {
        function handle(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handle);
        return () => document.removeEventListener("mousedown", handle);
    }, []);

    return (
        <div ref={ref} className={cn("relative w-48", className)}>

            <Button
                variant="outline"
                type="button"
                onClick={() => setOpen((p) => !p)}
                className="shadow-none"
            >
                <span className="truncate">
                    {selected ? selected.label : placeholder}
                </span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-white/30 text-[10px]"
                >
                    <Chevron />
                </motion.span>
            </Button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={cn(
                            "absolute top-[calc(100%+4px)] left-0 w-full z-50",
                            "bg-text-primary border border-primary",
                            "rounded overflow-hidden"
                        )}
                    >
                        <div className="max-h-52 overflow-y-auto">
                            {options.map((opt) => (
                                <div
                                    key={opt.value}
                                    onClick={() => { onChange(opt.value); setOpen(false); }}
                                    className={cn(
                                        "px-4 py-2.5 text-sm cursor-pointer transition-colors duration-100",
                                        "text-primary/80 hover:text-primary hover:bg-primary/[0.05]",
                                        value === opt.value && "bg-primary/[0.08] text-primary"
                                    )}
                                >
                                    {opt.label}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

export default Dropdown;