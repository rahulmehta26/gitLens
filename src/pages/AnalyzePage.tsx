import { useCallback, useEffect, useState } from "react"
import OptimizedImage from "../components/ui/OptimizedImage"
import analyzeMan from "../assets/analyzer-man.svg"
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"
import { useGithubStore } from "../store/githubStore"
import ErrorIcon from "../components/icons/ErrorIcon"
import UserProfile from "../components/analyzer/UserProfile"
import { useFilteredRepos, useGithubData } from "../hooks/useGithubData"
import LanguageChart from "../components/charts/LanguageChart"
import ActivityChart from "../components/charts/ActivityChart"
import RepoGrid from "../components/analyzer/RepoGrid"
import Filterbar from "../components/analyzer/Filterbar"
import githubImage from "../assets/github-image.png"

const AnalyzePage = () => {

    const activeUsername = useGithubStore((s) => s.activeUsername);
    const setActiveUsername = useGithubStore((s) => s.setActiveUsername);
    const filters = useGithubStore((s) => s.filters);

    const [input, setInput] = useState(activeUsername);

    const { processedData, isLoading, error, isFetching } = useGithubData(activeUsername);

    useEffect(() => {
        setInput(activeUsername);
    }, [activeUsername])

    const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedInput = input.trim();

        if (trimmedInput) setActiveUsername(trimmedInput);
    }, [input, setActiveUsername])

    const filteredRepos = useFilteredRepos(processedData?.repos, filters);

    if (!activeUsername) {
        return (
            <div
                className="max-w-5xl mx-auto h-full flex flex-col pt-24 items-center "
            >

                <div>
                    <OptimizedImage
                        srcSet={analyzeMan}
                        alt="man analyzing illustration"
                    />
                </div>

                <h2
                    className="text-4xl gradient-text font-bold"
                >
                    Analyze Any GitHub Profile
                </h2>

                <p
                    className="w-[40%] pt-6 text-lime/70 mx-auto text-center"
                >
                    Enter a GitHub username to visualize their repositories, languages, and activity over time.
                </p>

                <form
                    onSubmit={handleSearch}
                    className="w-full px-52 pt-8 flex justify-center items-center gap-8"
                >

                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="example rahulmehta26"
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        className="shrink-0 w-40"
                        disabled={!input.trim()}
                    >
                        Submit
                    </Button>
                </form>

            </div>
        )
    }

    return (
        <div
            className="max-w-5xl mx-auto h-full pt-24 "
        >
            <div
                className="w-2xl flex flex-col justify-start"
            >

                <form
                    onSubmit={handleSearch}
                    className="w-full pt-8 flex justify-center items-center gap-8"
                >

                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="example rahulmehta26"
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        className="shrink-0 w-40"
                        disabled={!input.trim()}
                    >
                        Start
                    </Button>
                </form>

            </div>

            {error &&
                (
                    <div
                        className="flex items-center gap-2 bg-danger/25 mt-8 p-3 custom-shadow rounded-full w-fit border-2 border-danger"
                    >

                        <ErrorIcon className="text-danger" />

                        <p
                            className="text-base text-danger font-semibold"
                        >
                            User not found. Check the username and try again.
                        </p>
                    </div>
                )
            }

            <UserProfile user={processedData?.user} loading={isLoading} />

            {
                processedData && filteredRepos?.length !== 0 ? (
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <LanguageChart data={processedData?.languageStats ?? []} loading={isLoading} />
                            <ActivityChart data={processedData?.activityData ?? []} loading={isLoading} />
                        </div>

                        <div>

                            <Filterbar
                                availableLangs={processedData?.availableLangs}
                                availableYears={processedData?.availableYears}
                                totalAll={filteredRepos.length}
                                totalShown={processedData?.repos.length}

                            />

                            <RepoGrid repos={filteredRepos} />
                        </div>
                    </>

                ) : (
                    <div className="flex flex-col items-center justify-center gap-3 py-4 text-white/30">
                        <div
                            className='size-52'
                        >
                            <OptimizedImage
                                src={githubImage}
                                alt='github illustration'
                            />
                        </div>
                        <p className="text-sm text-lime">No repositories</p>
                    </div>
                )
            }

        </div>
    )
}

export default AnalyzePage