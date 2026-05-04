import React, { memo } from 'react'
import aboutImage from "../../assets/about-image.jpg"
import githubImage from "../../assets/github-image.png"
import OptimizedImage from '../../components/ui/OptimizedImage'

const About = memo(() => {
    return (
        <div
            className='h-full w-full pb-32 bg-secondary'
        >
            <div
                className='max-w-7xl relative min-h-screen mx-auto'
            >

                <h2
                    className='text-7xl font-extrabold text-center py-28 text-text-primary'
                >
                    WHAT IS THIS ABOUT?
                </h2>
                <div
                    className='w-full z-10 relative h-[35rem] grid grid-cols-3 bg-white border-4 rounded-lg border-black custom-shadow'
                >

                    <div className='col-span-1 py-8 pl-6 flex justify-between flex-col'>

                        <h2 className='text-black font-extrabold text-5xl'>
                            UNDERSTAND ANY DEVELOPER <span className='bg-gradient-to-b from-black via-black/80 to-black/40 bg-clip-text text-transparent' >INSTANTLY</span>
                        </h2>

                        <div
                            className='w-full h-auto'
                        >

                            <OptimizedImage
                                src={githubImage}
                                alt='github image illustration'
                            />
                        </div>

                        <p className='text-primary font-bold text-sm'>
                            No sign-in. No setup. Just a GitHub username.
                        </p>

                    </div>

                    <div
                        className='col-span-1 '
                    />

                    <div className="col-span-1 rounded-r-lg overflow-hidden">
                        <OptimizedImage
                            src={aboutImage}
                            alt="about image illustration"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        className='bg-primary rounded-md w-[26.5rem] h-[45rem] p-4 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-40 text-text-primary border-2 border-black custom-shadow'
                    >
                        <h3
                            className='text-2xl py-6 font-extrabold'
                        >
                            What is GitLens?
                        </h3>

                        <div className="flex flex-col gap-5 flex-1">
                            <p className="text-sm leading-[1.85]">
                                GitHub profiles show a list of repositories — but they tell you
                                nothing about a developer's <span className="text-lime/80 font-medium">actual journey</span>.
                                When did they start? Which languages do they rely on? What was
                                their most productive year?
                            </p>

                            <p className="text-sm leading-[1.85]">
                                GitLens answers all of that. It pulls every public repository
                                from the <span className="text-lime/80 font-medium">GitHub REST API</span>,
                                processes the raw data in real time, and transforms it into
                                interactive charts, stat cards, and smart insights — in seconds.
                            </p>

                            <p className="text-sm leading-[1.85]">
                                Whether you're evaluating a hire, exploring open-source contributors,
                                or just curious about your own coding history — GitLens gives you
                                a <span className="text-lime/80 font-medium">full picture</span>,
                                not just a list.
                            </p>

                            <p className="text-sm leading-[1.85]">
                                And it doesn't stop at charts. GitLens lets you{" "}
                                <span className="text-lime/80 font-medium">filter, search, and sort</span>{" "}
                                every repository by language, year, or keyword — so you can dig into exactly
                                what you're looking for, not scroll through everything. Every repo card links
                                directly back to GitHub, making it a genuine research tool, not just a pretty dashboard.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
})

export default About