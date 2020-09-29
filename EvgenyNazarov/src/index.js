import React from 'react';
import ReactDom from 'react-dom';

import {Messenger} from 'components/Messenger';
import {Header} from 'components/Header';

ReactDom.render(

    <>
        <Header />
        <Messenger />
    </>,
    document.getElementById('root')
);