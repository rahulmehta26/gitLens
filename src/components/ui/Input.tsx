import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    placeholder?: string
}


const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, className, id, placeholder = "enter", ...props }, ref) => {

        const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

        return (
            <div className="flex flex-col gap-1.5 w-full">

                {
                    label &&
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium text-white/60">
                        {label}
                    </label>
                }

                <div className="relative flex items-center">

                    <input
                        ref={ref} id={inputId}
                        placeholder={placeholder}
                        className={cn(
                            "w-full bg-white outline-none focus:outline-none",
                            "p-3 border-2 border-black custom-shadow rounded-full ",
                            "placeholder:text-secondary text-primary",
                            className
                        )}
                        {...props}
                    />
                </div>
            </div>
        );
    }
);

export default Input;