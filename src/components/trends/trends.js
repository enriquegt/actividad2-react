import React from "react";
import News from "../news/news";
import {feed} from './source';

import './styles.css'

class Trends extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    render() {
        
        return (
            <div className="container">   
                <h5>"¿Qué está pasando?" </h5>
                {
                   this.state.tweets.map( tweet => {
                        return (
                            <News
                                title={tweet.category}
                                content={tweet.title}
                                numberTweets={tweet.noTweets}
                                />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Trends;