import React, { memo } from 'react'
import Card from '../ui/Card'
import OptimizedImage from '../ui/OptimizedImage'
import RightArrow from '../icons/RightArrow'
import type { GithubUser } from '../../types/github.types'
import Skeleton from '../ui/Skeleton'

interface UserProfileProps {
    user: GithubUser | undefined;
    loading: boolean;
}

const UserProfile = memo(({ user, loading }: UserProfileProps) => {

    if (loading) {
        return (
            <Card className="flex flex-col sm:flex-row gap-5">
                <Skeleton className="size-24 rounded-full shrink-0" />
                <div className="flex-1 flex flex-col gap-3 justify-center">

                    <div className='flex items-center gap-4' >
                        <Skeleton className="h-5 w-52" />
                        <Skeleton className="h-6 w-40" />

                    </div>
                    <Skeleton className="h-3.5 w-32" />
                    <Skeleton lines={2} />
                </div>

                <Skeleton className="h-3.5 w-32" />
            </Card>
        );
    }


    if (!user) return null;
    return (
        <Card
            className='flex items-start justify-between'
        >

            <div
                className='flex items-start gap-6'
            >

                <div
                    className='bg-text-primary shrink-0 w-28 h-28 overflow-hidden rounded-full '
                >

                    <OptimizedImage
                        src={user?.avatar_url}
                        alt={user?.name?.charAt(0)}

                    />

                </div>

                <div>

                    <div
                        className='flex items-center flex-wrap gap-2'
                    >
                        <span
                            className='text-lg text-text-primary font-extrabold font-display'
                        >
                            {user?.name ?? user?.login}
                        </span>

                        <p
                            className='bg-text-primary text-black rounded-full p-1 px-4 text-center w-fit'
                        >
                            @{user?.login}
                        </p>
                    </div>

                    <p
                        className='w-[75%] line-clamp-2 text-lime text-base font-semibold py-3'
                    >
                        {user?.bio}
                    </p>

                    <div
                        className='flex flex-wrap gap-4 font-extrabold text-base items-center'
                    >

                        <span className='text-lime ' >{user?.public_repos} <span className='text-xs text-lime/50 font-semibold' >Repos</span></span>
                        <span className='text-lime ' >{user?.followers} <span className='text-xs text-lime/50 font-semibold' >{user?.followers >= 1 ? "Follower" : "Followers"}</span></span>
                        <span className='text-lime ' >{user?.following} <span className='text-xs text-lime/50 font-semibold' >Following</span></span>

                    </div>
                </div>
            </div>

            <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-lime/50 hover:text-lime transition-colors"
            >
                View on GitHub

                <RightArrow className='-rotate-35 size-4 ' />
            </a>
        </Card>
    )
}
)
export default UserProfile