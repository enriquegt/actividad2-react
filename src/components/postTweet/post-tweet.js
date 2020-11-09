import React from 'react';
import './styles.css';

const PostTweet = (props) => {
    return (
        <div>
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl}  alt="profile" />
                </div>
                <form>
                    <input placeholder="¿Qué está pasando?" />
                    <div className="t-post-options">
                        <button>Twittear</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default PostTweet;