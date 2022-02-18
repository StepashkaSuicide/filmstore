import React from 'react';
import Friend from "./Frend/Friend";

const Friends = (props) => {

    let friendElement = props.state.friends.map(f => <Friend key={f.id} id={f.id} name={f.name}/>)
    return (
        <div>
            {friendElement}
        </div>
    );
};

export default Friends;