import OptimizedImage from "../../components/ui/OptimizedImage"
import image01 from "../../assets/image01.png"
import { cn } from "../../utils/cn"
import { howItWorksInfo } from "../../constant/howItWorks"
import { useState } from "react"
import Button from "../../components/ui/Button"
import RightArrow from "../../components/icons/RightArrow"
import { motion } from "motion/react"
import { moveRight } from "../../components/animations/buttonAnimations"
import { useNavigate } from "react-router"

const HowItWorks = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()

    const info = howItWorksInfo[currentIndex]

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % howItWorksInfo.length)
    }

    const handleOnclick = (id: number) => {
        setCurrentIndex(id - 1)
    }

    return (
        <div className="w-full h-full py-12 bg-primary">
            <div className={cn(
                "max-w-5xl mx-auto px-4 sm:px-8 gap-4",
                "grid grid-cols-1 md:grid-cols-12"
            )}
            >

                <div className="md:col-span-8 flex flex-col justify-center items-start rounded-sm md:rounded-md bg-secondary p-6 sm:p-8">
                    <p className={cn(
                        "uppercase font-display text-text-primary font-extrabold text-start",
                        "text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-[6rem]"
                    )}
                    >
                        How it <br /> works?
                    </p>
                </div>

                <div className="md:col-span-4 flex justify-center items-center rounded-sm md:rounded-md bg-secondary p-6 sm:p-8">
                    <div className="w-48 sm:w-64 md:w-full h-auto">
                        <OptimizedImage src={image01} alt="how it works illustration" />
                    </div>
                </div>

                <div className="md:col-span-5 flex justify-center items-center rounded-sm md:rounded-md bg-secondary row-span-6 lg:row-span-7 p-6 sm:p-8">
                    <p className={cn(
                        "uppercase text-lime text-center font-extrabold",
                        "text-xl sm:text-2xl md:text-3xl "
                    )}
                    >
                        From Username to Full Insights in Seconds
                    </p>
                </div>

                <div className="md:col-span-7 flex flex-col justify-between rounded-sm md:rounded-md bg-secondary p-6 sm:p-8 row-span-8">
                    <div>
                        <p className={cn("font-extrabold text-base sm:text-lg")}>
                            STEP {currentIndex + 1} :-
                        </p>

                        <motion.h2
                            key={info?.title}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn(
                                "font-extrabold text-text-primary pt-4 sm:pt-6 font-display",
                                "text-xl sm:text-2xl md:text-3xl "
                            )}
                        >
                            {info?.title} :-
                        </motion.h2>

                        <motion.p
                            key={info?.desc}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="pt-3 sm:pt-4 text-sm sm:text-base"
                        >
                            {info?.desc}
                        </motion.p>
                    </div>

                    <div className="pt-6">
                        <Button
                            onClick={handleNext}
                            variant="ghost"
                            type="button"
                            className="shadow-none"
                        >
                            <motion.span variants={moveRight}>
                                <RightArrow />
                            </motion.span>
                            {info?.id === 4 ? "back to start" : "next step"}
                        </Button>

                        <div className="flex pt-4 items-center gap-3 sm:gap-4">
                            {howItWorksInfo?.map(({ id }, index) => (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => handleOnclick(id)}
                                    className={cn(
                                        "h-3 sm:h-4 rounded-full border-2 cursor-pointer transition-all duration-300",
                                        index === currentIndex
                                            ? "w-12 sm:w-16 bg-text-primary border-text-primary scale-110"
                                            : "w-12 sm:w-16 bg-text-dim border-text-dim"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-5 flex justify-center items-center py-2">
                    <Button
                        variant="outline"
                        className="w-full flex justify-center items-center"
                        onClick={() => navigate("/analyze")}
                    >
                        Get Started
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default HowItWorks