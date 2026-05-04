import Button from '../../components/ui/Button'
import { cn } from '../../utils/cn'
import RightArrow from '../../components/icons/RightArrow'
import { motion } from 'motion/react'
import { moveRight } from '../../components/animations/buttonAnimations'
import { useNavigate } from 'react-router'

const LandingHero = () => {

    const navigate = useNavigate();

    return (
        <div
            className='flex relative max-w-5xl pt-24 mx-auto flex-col h-screen justify-evenly items-center px-4 sm:px-8'
        >

            <h3
                className='font-bold md:text-xl text-sm sm:text-base '
            >
                INTRODUCING
            </h3>

            <h1
                className={cn(
                    'text-text-primary font-display font-extrabold',
                    "text-4xl sm:text-6xl md:text-7xl lg:text-[7rem]"
                )}
            >
                GITLENS
            </h1>

            <h2
                className={cn(
                    'pb-6 text-center text-lime font-extrabold',
                    'text-sm sm:text-2xl md:text-3xl lg:text-[3rem]',
                )}
            >
                Visualize Any Developer's <br />
                <span
                    className="bg-gradient-to-b from-lime via-lime/80 to-lime/40 bg-clip-text text-transparent"

                >
                    GitHub Journey
                </span>
            </h2>


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
    )
}

export default LandingHero