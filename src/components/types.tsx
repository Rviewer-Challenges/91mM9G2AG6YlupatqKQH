export interface Profile {
    username?: string;
    avatarUrl: string | null;
    isOnTimeline?: boolean;
}

export interface Tweet {
    id: string;
    content: string;
    createdAt: string;
}

export interface TwitterProps {
    tweet: {
        userProfile: Profile;
        tweetDetails: Tweet;
    };
    currentUserId?: string;
    likesCount: number;
    hasLiked: boolean;
    repliesCount: number;
}

export interface ProfileProps {
    username?: string;
    avatarUrl: string | null;
    isOnTimeline?: boolean;
}
