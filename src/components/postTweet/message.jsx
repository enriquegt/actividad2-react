import React from 'react';
import './styles.css';
import {DotsHorizontalOutline} from "@graywolfai/react-heroicons";
import ContextMessage from '../contex-message';
import moment from "moment";


class Tweet extends React.Component{
    render(){
        return (
            <div className="tweet-container">
            <div className="tweet-options-container">
                <div className="tweet-options" onClick={() => this.props.contextFn2.toggleContextMenuFn2(this.props.index)}>
                    <DotsHorizontalOutline />
                </div>
                {
                this.props.showContextM2 ? (<ContextMessage removeFn={this.props.contextFn2.removeMessageFn} index={this.props.index} />) :  null
            }
            </div>
                    <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <small className="pull-right text-muted">
                <span className="glyphicon glyphicon-time"></span>
                {moment(this.props.date).format("LT")}
                </small>
                </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.