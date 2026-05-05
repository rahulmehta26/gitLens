import { motion } from "motion/react"
import Button from "../ui/Button"
import Profile from "../icons/Profile"
import Analyze from "../icons/Analyze"
import { leftIconVariants, rightIconVariants } from "../animations/buttonAnimations"
import { useNavigate } from "react-router"
import OptimizedImage from "../ui/OptimizedImage"
import gitlensLogo from "../../assets/gitlens_logo.png"
import { cn } from "../../utils/cn"

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className='fixed z-50 left-1/2 custom-shadow -translate-x-1/2 top-4 sm:top-6
            w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-5xl
            border-4 border-black bg-white py-3 px-2 sm:px-4 rounded-full'>

            <div className="flex justify-between items-center">

                <button
                    onClick={() => navigate("/")}
                    className="flex cursor-pointer items-center gap-2"
                >
                    <div className="w-6 sm:w-[3rem] h-auto">
                        <OptimizedImage
                            src={gitlensLogo}
                            alt="gitlens logo illustration"
                        />
                    </div>
                    <h2 className='text-black font-display font-extrabold text-sm sm:text-2xl'>
                        gitLens
                    </h2>
                </button>

                <Button
                    onClick={() => navigate("/analyze")}
                    className={cn(
                        "flex justify-center items-center",
                        "w-10 h-10 sm:w-auto sm:h-auto "
                    )}
                >
                    <motion.span className="flex justify-center items-center gap-2 sm:gap-3">

                        <motion.span className="hidden md:flex items-center justify-center" variants={leftIconVariants}>
                            <Analyze />
                        </motion.span>

                        <span className="hidden sm:flex justify-center items-center gap-3">Analyze Profile</span>

                        <motion.span variants={rightIconVariants}>
                            <Profile />
                        </motion.span>

                    </motion.span>
                </Button>

            </div>
        </header>
    )
}

export default Header