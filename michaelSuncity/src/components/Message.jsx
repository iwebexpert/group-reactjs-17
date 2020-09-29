import React from 'react';

export const Message = ({text, author}) => {
    return (
        <div>
            <p>{text} <b>{author}</b></p>
        </div>
    );
};