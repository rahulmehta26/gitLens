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
            <div className="max-w-5xl mx-auto h-full flex flex-col pt-28 sm:pt-32 items-center px-4 sm:px-8">

                <div className="w-40 sm:w-56 md:w-72">
                    <OptimizedImage
                        src={analyzeMan}
                        alt="man analyzing illustration"
                    />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text font-bold text-center mt-4">
                    Analyze Any GitHub Profile
                </h2>

                <p className="w-full sm:w-[60%] md:w-[40%] pt-4 sm:pt-6 text-lime/70 mx-auto text-center text-sm sm:text-base">
                    Enter a GitHub username to visualize their repositories, languages, and activity over time.
                </p>

                <form
                    onSubmit={handleSearch}
                    className="w-full pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-8
                        px-0 sm:px-8 md:px-24 lg:px-52"
                >
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="example rahulmehta26"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="shrink-0 sm:w-40 w-full"
                        disabled={!input.trim()}
                    >
                        Submit
                    </Button>
                </form>

            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto h-full pt-20 sm:pt-24 px-4 sm:px-8">

            <form
                onSubmit={handleSearch}
                className="w-full pt-8 sm:pt-12 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-8"
            >
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="example rahulmehta26"
                />
                <Button
                    type="submit"
                    variant="primary"
                    className="shrink-0 sm:w-40 w-full"
                    disabled={!input.trim() || isFetching}
                >
                    {isFetching ? "Loading…" : "Start"}
                </Button>
            </form>

            {
                error && (
                    <div className="flex items-center gap-2 bg-danger/25 mt-6 sm:mt-8 p-3 custom-shadow rounded-full w-fit border-2 border-danger">
                        <ErrorIcon className="text-danger shrink-0" />
                        <p className="text-sm sm:text-base text-danger font-semibold">
                            {error}
                        </p>
                    </div>
                )}

            <UserProfile user={processedData?.user} loading={isLoading} />

            {processedData && filteredRepos?.length !== 0 ? (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <LanguageChart data={processedData?.languageStats ?? []} loading={isLoading} />
                        <ActivityChart data={processedData?.activityData ?? []} loading={isLoading} />
                    </div>

                    <div>
                        <Filterbar
                            availableLangs={processedData?.availableLangs}
                            availableYears={processedData?.availableYears}
                            totalAll={processedData?.repos.length}
                            totalShown={filteredRepos.length}
                        />
                        <RepoGrid repos={filteredRepos} />
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center gap-3 py-8 text-white/30">
                    <div className='size-32 sm:size-52'>
                        <OptimizedImage src={githubImage} alt='github illustration' />
                    </div>
                    <p className="text-sm text-lime">No repositories</p>
                </div>
            )}

        </div>
    )
}

export default AnalyzePage