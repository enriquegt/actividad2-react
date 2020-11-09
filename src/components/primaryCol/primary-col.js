import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';

const PrimaryCol = (props) => {
    return (
        <div className="t-col-container">
            <h3>Inicio</h3>
            <PostTweet profileUrl={props.profileUrl} />
            <Feed />
        </div>
    )
}

export default PrimaryCol;