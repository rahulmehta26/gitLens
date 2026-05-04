import { motion } from "motion/react"
import Button from '../ui/Button'
import RightArrow from '../icons/RightArrow'
import OptimizedImage from '../ui/OptimizedImage'
import footerImage from "../../assets/footer-image.png"
import { useNavigate } from 'react-router'
import { moveRight } from '../animations/buttonAnimations'
import { cn } from "../../utils/cn"

const Footer = () => {

    const navigate = useNavigate();
    return (
        <footer className='w-full h-full bg-secondary'>

            <div
                className='max-w-5xl min-h-screen lg:pt-12 flex flex-col mx-auto px-4 sm:px-8'
            >

                <h2 className={cn(
                    'font-display text-text-primary text-center font-extrabold',
                    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8.6rem]",
                    "pt-12 lg:pt-0"

                )}>
                    GITLENS
                </h2>

                <div className='mt-8 md:mt-10 flex justify-center'>
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

                <div className={cn(
                    'mt-20 md:mt-auto gap-6 md:gap-10',
                    "flex flex-col sm:flex-row justify-center items-center sm:items-end",
                    "pb-0"
                )}
                >

                    <div
                        className="hidden md:flex gap-4 items-center pb-0 sm:pb-6 "
                    >

                        <span className='font-display text-text-primary text-sm font-extrabold'>
                            &copy; gitLens {new Date().getFullYear()}
                        </span>
                    </div>


                    <div className='w-48 sm:w-64 md:w-80 max-w-full'>
                        <OptimizedImage
                            src={footerImage}
                            alt='footer illustration image'
                            className="w-full h-auto"
                        />
                    </div>

                    <div
                        className="md:hidden flex gap-4 items-center pb-0 sm:pb-6 "
                    >

                        <span className='font-display text-text-primary text-sm font-extrabold'>
                            &copy; gitLens {new Date().getFullYear()}
                        </span>
                    </div>

                    <span
                        className='font-display text-center text-text-primary text-xs font-extrabold pb-0 sm:pb-6'
                    >
                        WITH LOVES FOR <br />DEVELOPER
                    </span>

                </div>

            </div>

        </footer>
    )
}

export default Footer
