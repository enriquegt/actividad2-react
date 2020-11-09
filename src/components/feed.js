import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    render() {

        const {profile, profileName, username, content, interaction, display} = {
            profile: "",
            profileName: "",
            username: "",
            content: "",
            interaction: "",
            display: ""
        };

        return (
            <div>
                
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                profileUrl={tweet.img}
                                username={tweet.username}
                                content={tweet.content}
                                interactionCommnets={tweet.interaction.comments} 
                                interactionRetweets={tweet.interaction.retweets}
                                interactionLikes={tweet.interaction.likes}/>
                        )
                    }) 
                }
            </div>
        );
    }
}

export default Feed;