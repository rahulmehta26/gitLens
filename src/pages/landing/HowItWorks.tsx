import OptimizedImage from "../../components/ui/OptimizedImage"
import image01 from "../../assets/image01.png"
import { cn } from "../../utils/cn"
import { howItWorksInfo } from "../../constant/howItWorks"
import { useState } from "react"
import Button from "../../components/ui/Button"
import RightArrow from "../../components/icons/RightArrow"
import { motion } from "motion/react"
import { moveRight } from "../../components/animations/buttonAnimations"


const HowItWorks = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const info = howItWorksInfo[currentIndex]

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % howItWorksInfo.length)
    }

    const handleOnclick = (id: number) => {
        setCurrentIndex(id - 1)
    }

    return (
        <div
            className="w-full h-full py-12 bg-primary"
        >
            <div
                className="max-w-5xl gap-8 grid grid-cols-12 mx-auto"
            >
                <div
                    className="col-span-8 flex flex-col justify-center items-center rounded-md bg-secondary row-span-8 p-8"
                >
                    <p
                        className="text-7xl leading-[6rem] uppercase font-display text-text-primary text-start font-extrabold"
                    >
                        How it <br /> works?
                    </p>
                </div>

                <div
                    className="relative col-span-4 flex justify-center items-center rounded-md bg-secondary row-span-8 p-8"
                >
                    <div
                        className="w-[32rem] h-auto"
                    >
                        <OptimizedImage src={image01} />

                    </div>

                </div>

                <div
                    className="relative col-span-5 flex justify-center items-center rounded-md bg-secondary row-span-10 p-8"
                >

                    <p
                        className="text-3xl uppercase text-lime text-center font-extrabold"
                    >
                        From Username to Full Insights in Seconds
                    </p>

                </div>


                <div
                    className="col-span-7 flex flex-col justify-between row-span-12 rounded-md bg-secondary p-8"
                >
                    <div>
                        <p
                            className={cn("font-extrabold text-lg")}
                        >
                            STEP {currentIndex + 1} :-
                        </p>

                        <motion.h2
                            className="text-3xl font-extrabold text-text-primary pt-6 font-display"
                        >
                            {
                                info?.title
                            } :-
                        </motion.h2>

                        <motion.h2
                            className="pt-4"
                        >
                            {
                                info?.desc
                            }
                        </motion.h2>
                    </div>


                    <div
                    >

                        <Button
                            onClick={handleNext}
                            variant="ghost"
                            type="button"
                            className="shadow-none"
                        >
                            <motion.span
                                variants={moveRight}
                            >

                                <RightArrow />
                            </motion.span>

                            {
                                info?.id === Number("4") ? "back to start" : "next step"
                            }
                        </Button>

                        <div
                            className="flex pt-4 items-center gap-4"
                        >

                            {
                                howItWorksInfo?.map(({ id }, index) => {
                                    return (
                                        <button
                                            key={id}
                                            type="button"
                                            onClick={() => handleOnclick(id)}
                                            className={cn(
                                                "w-16 h-4 rounded-full border-2 cursor-pointer transition-all duration-300",
                                                index === currentIndex
                                                    ? "bg-text-primary border-text-primary scale-110"
                                                    : "bg-text-dim border-text-dim"
                                            )}
                                        />
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>

                <div
                    className="col-span-5 row-span-2 flex justify-center items-center "
                >

                    <Button
                        variant="outline"
                        className="w-full flex justify-center items-center"
                    >
                        Get Started

                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks