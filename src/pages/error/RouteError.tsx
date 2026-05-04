import ErrorBody from './ErrorBody'
import Button from '../../components/ui/Button'
import { useNavigate } from 'react-router'
import OptimizedImage from '../../components/ui/OptimizedImage';
import notFound from "../../assets/not-found.png"

const RouteError = () => {

    const navigate = useNavigate();
    return (
        <ErrorBody
            className=''
        >

            <div
                className='flex flex-col justify-center items-center gap-10 flex-1'
            >

                <div
                    className='flex flex-col justify-center items-center'
                >

                    <h2
                        className='text-[7rem] text-text-primary font-display font-extrabold'
                    >
                        404
                    </h2>

                    <p
                        className='text-center w-[65%] font-extrabold '
                    >
                        The page you are looking for doesn't exist or has been moved. Please go back to the homepage.
                    </p>
                </div>

                <Button
                    onClick={() => navigate("/")}
                    variant='ghost'
                    className='text-4xl border-4 border-black text-black rounded-full p-6 custom-shadow-2 bg-white font-extrabold font-display'
                >
                    Go Back Home
                </Button>

            </div>

            <div
                className='flex flex-col justify-end mt-auto w-40 h-auto'
            >
                <OptimizedImage
                    src={notFound}
                    alt='not found github illustration'
                />
            </div>
        </ErrorBody>
    )
}

export default RouteError