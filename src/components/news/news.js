import React from 'react';
import './styles.css';

class News extends React.Component{
    render(){
        return (
            <div className="news-container">
                <div className="row">
                
                    <div className="c1-news">
                        {this.props.profile}
                    </div>
                </div>
                <div className="row">
                    <p className="content-news">                
                        {this.props.content}
                    </p>
                </div>
                <div className="row">                
                    <p className="number-tweets">
                        {this.props.numberTweets}
                    </p>
                </div>
            </div>
        )
    }
}

export default News;