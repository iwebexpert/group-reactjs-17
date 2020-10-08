import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {rootReducer} from 'reducers';

const composeWithDevToolsUser = composeWithDevTools({
    trace: true,
});

export const store = createStore(rootReducer, composeWithDevToolsUser());