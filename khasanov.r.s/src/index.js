import React from 'react';
import ReactDom from 'react-dom';

import {Messenger} from "./components/Messenger";

const renderer = () => ReactDom.render(
    <>
        <Messenger />
    </>,
    document.getElementById('root')
)

renderer();