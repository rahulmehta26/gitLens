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
            className='flex relative max-w-5xl mx-auto flex-col h-screen justify-center items-center'
        >

            <h3
                className='font-bold text-xl'
            >
                INTRODUCING
            </h3>

            <h1
                className='text-[7rem] text-text-primary font-display font-extrabold'
            >
                GITLENS
            </h1>

            <h2
                className={cn(
                    'pb-6 text-center text-lime text-[3rem] font-extrabold',
                )}
            >
                Visualize Any Developer's <br />
                <span
                    className="bg-gradient-to-b from-lime via-lime/80 to-lime/40 bg-clip-text text-transparent"

                >GitHub Journey</span>
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