import React from 'react';
import ReactDom from 'react-dom';

import {Layout} from 'components/Layout';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';

ReactDom.render(
    <>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </>,
    document.getElementById('root')
);

