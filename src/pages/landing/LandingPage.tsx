import About from './About'
import HowItWorks from './HowItWorks'
import LandingHero from './LandingHero'

const LandingPage = () => {
    return (
        <div
            className='flex flex-col justify-center items-center min-h-screen'
        >
            <LandingHero />

            <About />

            <HowItWorks />
        </div>
    )
}

export default LandingPage