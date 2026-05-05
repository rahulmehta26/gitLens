import React, { memo } from "react";
import Card from "../ui/Card";
import OptimizedImage from "../ui/OptimizedImage";
import RightArrow from "../icons/RightArrow";
import type { GithubUser } from "../../types/github.types";
import Skeleton from "../ui/Skeleton";

interface UserProfileProps {
    user: GithubUser | undefined;
    loading: boolean;
}

const UserProfile = memo(({ user, loading }: UserProfileProps) => {
    if (loading) {
        return (
            <Card className="flex flex-col sm:flex-row gap-5">
                <Skeleton className="size-20 sm:size-24 rounded-full shrink-0" />
                <div className="flex-1 flex flex-col gap-3 justify-center">
                    <div className="flex flex-wrap items-center gap-4">
                        <Skeleton className="h-5 w-40 sm:w-52" />
                        <Skeleton className="h-6 w-32 sm:w-40" />
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
        <Card className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full sm:w-auto">
                <div className="bg-text-primary shrink-0 w-20 h-20 sm:w-28 sm:h-28 overflow-hidden rounded-full">
                    <OptimizedImage src={user?.avatar_url} alt={user?.name?.charAt(0)} />
                </div>

                <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2">
                        <span className="text-base sm:text-lg text-text-primary font-extrabold font-display">
                            {user?.name ?? user?.login}
                        </span>
                        <p className="bg-text-primary text-black rounded-full p-1 px-3 sm:px-4 text-center text-sm w-fit">
                            @{user?.login}
                        </p>
                    </div>

                    <p className="w-full sm:w-[75%] line-clamp-2 text-lime text-sm sm:text-base font-semibold py-2 sm:py-3">
                        {user?.bio}
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 font-extrabold text-sm sm:text-base items-center">
                        <span className="text-lime">
                            {user?.public_repos}{" "}
                            <span className="text-xs text-lime/50 font-semibold">Repos</span>
                        </span>
                        <span className="text-lime">
                            {user?.followers}{" "}
                            <span className="text-xs text-lime/50 font-semibold">
                                {user?.followers === 1 ? "Follower" : "Followers"}
                            </span>
                        </span>
                        <span className="text-lime">
                            {user?.following}{" "}
                            <span className="text-xs text-lime/50 font-semibold">
                                Following
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <a
                href={user?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-lime/50 hover:text-lime transition-colors shrink-0 mt-2 sm:mt-0"
            >
                View on GitHub
                <RightArrow className="-rotate-35 size-4" />
            </a>
        </Card>
    );
});
export default UserProfile;
