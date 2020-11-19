import React from 'react';
import './styles.css';

const PostTweet = (props) => {
    return (
        <div>
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl} alt="profile"/>
                </div>
                <div className="form" >
                    <input
                        id="btn-input"
                        type="text"
                        className="form-control input-sm"
                        placeholder="¿Qué está pasando?"
                        value={props.newMessage}
                        onChange={props.handleInput}/>
                    <div className="t-post-options">
                        <button id="btn-chat" onClick={props.sendMessage}>
                            Twittear</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostTweet;