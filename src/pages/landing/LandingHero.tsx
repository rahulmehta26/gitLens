import Button from "../../components/ui/Button";
import { cn } from "../../utils/cn";
import RightArrow from "../../components/icons/RightArrow";
import { motion } from "motion/react";
import { moveRight } from "../../components/animations/buttonAnimations";
import { useNavigate } from "react-router";

const LandingHero = () => {
    const navigate = useNavigate();

    return (

        <div
            className="w-full"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 5v14M5 12h14' stroke='%23213b32' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundSize: "52px 26px",
            }}
        >
            <div
                className="flex relative max-w-5xl pt-24 mx-auto flex-col h-screen justify-evenly items-center px-4 sm:px-8"

            >
                <h3 className="font-bold md:text-xl text-sm sm:text-base ">
                    INTRODUCING
                </h3>

                <h1
                    className={cn(
                        "text-text-primary font-display font-extrabold",
                        "text-4xl sm:text-6xl md:text-7xl lg:text-[7rem]",
                    )}
                >
                    GITLENS
                </h1>

                <h2
                    className={cn(
                        "pb-6 text-center text-lime font-extrabold",
                        "text-sm sm:text-2xl md:text-3xl lg:text-[3rem]",
                    )}
                >
                    Visualize Any Developer's <br />
                    <span className="bg-gradient-to-b from-lime via-lime/80 to-lime/40 bg-clip-text text-transparent">
                        GitHub Journey
                    </span>
                </h2>

                <Button className="cursor-pointer" onClick={() => navigate("/analyze")}>
                    Get Started
                    <motion.span variants={moveRight}>
                        <RightArrow />
                    </motion.span>
                </Button>
            </div>
        </div>
    );
};

export default LandingHero;
