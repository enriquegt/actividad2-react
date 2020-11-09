import React from 'react';

const Account = (props) => {
    return (
        <div className="t-profile-img">
            <img src={props.profileUrl} />
        </div>
    )
}

export default Account;