import React from 'react';

//TODO
export const Message = ({text, author}) => {
    return (
    <div>
        <p>{text} <b>({author})</b></p>
    </div>
    );
};