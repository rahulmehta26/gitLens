import React, { memo, useCallback, useMemo } from 'react'
import Input from '../ui/Input'
import { SORTS } from '../../constant/sort.constant'
import Button from '../ui/Button'
import { cn } from '../../utils/cn'
import { useGithubStore } from '../../store/githubStore'
import X from '../icons/X'
import Dropdown, { type Option } from '../ui/Dropdown'

interface FilterbarProps {
    availableLangs?: string[];
    availableYears?: string[];
    totalShown?: number;
    totalAll: number;
}

interface FilterbarProps {
    availableLangs?: string[];
    availableYears?: string[];
    totalShown?: number;
    totalAll: number;
}

function toOptions(values: string[] = [], allLabel: string): Option[] {
    return [
        { label: allLabel, value: "all" },
        ...values.map((v) => ({ label: v, value: v })),
    ];
}

const Filterbar = memo(({ availableLangs, availableYears, totalShown, totalAll }: FilterbarProps) => {

    const filters = useGithubStore((s) => s.filters);
    const setSearchFilter = useGithubStore((s) => s.setSearchFilter);
    const setLanguageFilter = useGithubStore((s) => s.setLanguageFilter);
    const setYearFilter = useGithubStore((s) => s.setYearFilter);
    const setSortBy = useGithubStore((s) => s.setSortBy);
    const resetFilters = useGithubStore((s) => s.resetFilters);
    const isFiltered = filters.language !== "all" || filters.year !== "all" || filters.search.trim() !== "";

    const langOptions = useMemo(
        () => toOptions(availableLangs, "All Languages"),
        [availableLangs]
    );

    const yearOptions = useMemo(
        () => toOptions(availableYears, "All Years"),
        [availableYears]
    );

    const handleLang = useCallback(
        (value: string) => setLanguageFilter(value),
        [setLanguageFilter]
    );

    const handleYear = useCallback(
        (value: string) => setYearFilter(value),
        [setYearFilter]
    );


    return (
        <>
            <div className='w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>

                <Input
                    value={filters.search}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder='search repositories...'
                />

                <div className='flex items-center gap-2 sm:gap-4'>
                    {SORTS?.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => setSortBy(value)}
                            className={cn(
                                "border-2 py-1.5 sm:py-2 px-3 sm:px-4 hover:border-lime rounded-full cursor-pointer border-lime/30",
                                "transition-all duration-300 text-sm sm:text-base",
                                filters?.sortBy === value && "border-lime bg-text-primary text-primary font-semibold custom-shadow"
                            )}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <span className="text-xs text-lime/50 sm:ml-auto shrink-0">
                    {totalShown} / {totalAll} repos
                </span>
            </div>

            <div className='flex flex-wrap items-center gap-4 sm:gap-6 md:gap-12 mt-6 sm:mt-10 mb-4'>

                <Dropdown
                    options={langOptions}
                    value={filters.language}
                    onChange={handleLang}
                    placeholder="All Languages"
                    className="w-40 sm:w-44"
                />

                <Dropdown
                    options={yearOptions}
                    value={filters.year}
                    onChange={handleYear}
                    placeholder="All Years"
                    className="w-32 sm:w-36"
                />

                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={resetFilters}
                        className='flex shadow-none group items-center gap-2 text-lime/50 hover:text-lime'
                    >
                        <X className='group-hover:rotate-90 duration-300 transition-all' />
                        Clear filters
                    </Button>
                )}
            </div>
        </>
    )
})

export default Filterbar


