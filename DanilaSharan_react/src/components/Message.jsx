import React from 'react';

export const Message = ({text, author}) => {
    return (
    <div>
        <p><b>{author}:</b> {text} </p>
    </div>
    );
};
