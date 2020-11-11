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

    selectedRetweets = (index) => {
        let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));

        if (tweetsClone[index].selectedRetweets) {
            tweetsClone[index].selectedRetweets = false;
            tweetsClone[index].interaction.retweets = tweetsClone[index].interaction.retweets - 1;
            this.setState({tweets: tweetsClone});
        } else {
            tweetsClone[index].selectedRetweets = true;
            tweetsClone[index].interaction.retweets = tweetsClone[index].interaction.retweets + 1;
            this.setState({tweets: tweetsClone});
        }
    }

    selectedLikes = (index) => {
        let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));

        if (tweetsClone[index].selectedLikes) {
            tweetsClone[index].selectedLikes = false;
            tweetsClone[index].interaction.likes = tweetsClone[index].interaction.likes - 1;
            this.setState({tweets: tweetsClone});
        } else {
            tweetsClone[index].selectedLikes = true;
            tweetsClone[index].interaction.likes = tweetsClone[index].interaction.likes + 1;
            this.setState({tweets: tweetsClone});
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
                                index = {tweet.id}
                                profileUrl={tweet.img}
                                username={tweet.username}
                                content={tweet.content}
                                interactionCommnets={tweet.interaction.comments} 
                                interactionRetweets={tweet.interaction.retweets}
                                interactionLikes={tweet.interaction.likes}
                                selectedLikesFn={this.selectedLikes}
                                selectedRetweetsFn={this.selectedRetweets}/>
                        )
                    }) 
                }
            </div>
        );
    }
}

export default Feed;