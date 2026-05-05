import React, { memo, useCallback } from 'react'
import Card from '../ui/Card'
import type { GithubRepo } from '../../types/github.types'
import { motion } from "motion/react"
import { formatDate, formatNumber } from '../../utils/format'
import { getLangColor } from '../../constant/languageColor.constant'
import Star from '../icons/Star'
import { Fork } from '../icons/Fork'

const RepoCard = memo(({ repo, index }: { repo: GithubRepo; index: number }) => {

    const handleClick = useCallback(() => window.open(repo.html_url, "_blank", "noopener,noreferrer"), [repo.html_url]);

    return (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.35 }}>
            <Card
                onClick={handleClick}
                className='cursor-pointer group space-y-3'
            >

                <div>

                    <h3
                        className='transition-colors duration-300 group-hover:text-text-primary'
                    >
                        {repo?.name}
                    </h3>

                    {
                        repo?.archived && <div> archived </div>
                    }
                </div>

                {repo.description &&
                    (
                        <p
                            className='text-xs text-lime/50'
                        >
                            {repo?.description}
                        </p>
                    )
                }

                {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {repo?.topics.slice(0, 3).map((t) => <div key={t} className='w-fit bg-secondary border border-primary font-normal p-1 px-3 text-[10px] rounded-full' >{t}</div>)}
                        {repo?.topics.length > 3 && <div className='w-fit bg-primary p-2 rounded-full'>+{repo?.topics?.length - 3}</div>}
                    </div>
                )}

                <div className="flex items-center justify-between mt-6 border-t border-lime/20">
                    <div className="flex items-center gap-3 pt-4 text-[11px] text-white/35">
                        {repo?.language && (
                            <span className="flex items-center gap-2">
                                <span className="size-2 rounded-full" style={{ background: getLangColor(repo?.language) }} />
                                {repo?.language}
                            </span>
                        )}
                        <span className='flex items-center gap-2' > <Star className='text-amber-300 size-4' /> {formatNumber(repo?.stargazers_count)}</span>
                        {repo.forks_count > 0 && <span className='flex items-center gap-2' > <Fork className='size-5 text-gray-500' /> {formatNumber(repo?.forks_count)}</span>}
                    </div>
                    <span className="text-[11px] text-white/25">{formatDate(repo?.created_at)}</span>
                </div>

            </Card>
        </motion.div>

    )
})

const RepoGrid = memo(({ repos }: { repos: GithubRepo[] }) => {

    return (
        <div className="pb-4 md:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {
                repos?.map((repo, index) => <RepoCard key={repo.id} repo={repo} index={index} />)
            }
        </div>
    )
})

export default RepoGrid