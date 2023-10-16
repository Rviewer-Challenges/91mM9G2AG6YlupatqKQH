import React from 'react';
import {TwitterProps, ProfileProps} from '../types'

interface Props {
    tweet: {
        userProfile: ProfileProps;
        tweetDetails: TwitterProps;
    };
    currentUserId?: string;
    likesCount: number;
    hasLiked: boolean;
    repliesCount: number;
}

const TwitterComponent: React.FC<Props> = ({ tweet, currentUserId, likesCount, hasLiked, repliesCount }) => {
    const handleLike = () => {
        // handle like functionality
    };

    const handleReply = () => {
        // handle reply functionality
    };

    return (
        <div>
            <div>
                <img src={tweet.userProfile.avatarUrl || ''}
                 alt={tweet.userProfile.username} />
                <div>
                    <h3>{tweet.userProfile.username}</h3>
                    <p>{tweet.userProfile.username}</p>
                </div>
            </div>
            <div>
                <p>{tweet.tweetDetails.tweet.tweetDetails.createdAt}</p>
            </div>
            <div>
                <button onClick={handleLike}>{hasLiked ? 'Unlike' : 'Like'}</button>
                <span>{likesCount}</span>
                <button onClick={handleReply}>Reply</button>
                <span>{repliesCount}</span>
            </div>
        </div>
    );
};

export default TwitterComponent;
