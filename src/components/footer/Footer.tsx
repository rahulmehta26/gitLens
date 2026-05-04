import { motion } from "motion/react"
import Button from '../ui/Button'
import RightArrow from '../icons/RightArrow'
import OptimizedImage from '../ui/OptimizedImage'
import footerImage from "../../assets/footer-image.png"
import { useNavigate } from 'react-router'
import { moveRight } from '../animations/buttonAnimations'
import gitlensLogo from "../../assets/gitlens_logo.png"

const Footer = () => {

    const navigate = useNavigate();
    return (
        <footer className='w-full h-full bg-secondary'>

            <div
                className='max-w-5xl min-h-screen flex flex-col mx-auto'
            >

                <h2 className='font-display text-text-primary text-center text-[8.6rem] font-extrabold'>
                    GITLENS
                </h2>

                <div className='mt-10 flex justify-center'>
                    <Button
                        className='cursor-pointer'
                        onClick={() => navigate("/analyze")}
                    >
                        Get Started

                        <motion.span
                            variants={moveRight}
                        >

                            <RightArrow />
                        </motion.span>

                    </Button>
                </div>

                <div className='mt-auto flex justify-center gap-10 items-end'>

                    <div
                        className=" flex gap-4 items-center  pb-6 "
                    >

                        <span className='font-display text-text-primary text-sm font-extrabold'>
                            &copy; gitLens {new Date().getFullYear()}
                        </span>
                    </div>


                    <div className='w-80 max-w-full'>
                        <OptimizedImage
                            src={footerImage}
                            alt='footer illustration image'
                            className="w-full h-auto"
                        />
                    </div>

                    <span
                        className='font-display text-center text-text-primary text-xs font-extrabold pb-6'
                    >
                        WITH LOVES FOR <br />DEVELOPER
                    </span>

                </div>

            </div>

        </footer>
    )
}

export default Footer
