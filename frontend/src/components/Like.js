import React, { useState } from 'react';
import Heart from './heart-solid.svg';

const LikeButton = ({ reviewId, initialLikes, isAuthenticated, onLike }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {

        // For demonstration purposes, I'll just toggle the state here
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);

        // Call the onLike callback if provided
        if (onLike) {
            onLike(reviewId, !isLiked); // Pass reviewId and the new like status to the parent component
        }
    };

    return (
        <button type="button" className="btn-secondary" onClick={handleLike}>
            <img src={Heart} width="15" height="15" alt="Heart Logo" className={`d-inline-block ${isLiked ? 'liked' : ''}`} />
            {isAuthenticated && <span> Like review | {likes}</span>}
        </button>
    );
};

export default LikeButton;
