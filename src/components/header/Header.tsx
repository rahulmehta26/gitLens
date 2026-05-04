import { motion } from "motion/react"
import Button from "../ui/Button"
import Profile from "../icons/Profile"
import Analyze from "../icons/Analyze"
import { leftIconVariants, rightIconVariants } from "../animations/buttonAnimations"
import { useNavigate } from "react-router"
import OptimizedImage from "../ui/OptimizedImage"
import gitlensLogo from "../../assets/gitlens_logo.png"

const Header = () => {

    const navigate = useNavigate();

    return (
        <header
            className='fixed z-50 left-1/2 custom-shadow -translate-x-1/2 top-6 w-full max-w-5xl border-4 border-black bg-white py-3 px-4 rounded-full '
        >

            <div
                className="flex justify-between items-center"
            >
                <button
                    onClick={() => navigate("/")}
                    className="flex cursor-pointer items-center gap-2"
                >

                    <div
                        className="w-[3rem] h-auto"
                    >
                        <OptimizedImage
                            src={gitlensLogo}
                            alt="gitlens logo illustration"
                        />
                    </div>

                    <h2
                        className='text-black font-display font-extrabold text-2xl'
                    >
                        gitLens
                    </h2>
                </button>

                <Button
                    onClick={() => navigate("/analyze")}
                >
                    <motion.span className="flex items-center gap-3">

                        <motion.span variants={leftIconVariants}>
                            <Analyze />
                        </motion.span>

                        <span>Analyze Profile</span>

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