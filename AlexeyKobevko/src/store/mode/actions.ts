import { Action, ActionCreator } from 'redux';

export const MODE_TOGGLE = 'MODE_TOGGLE';

export const toggleMode: ActionCreator<Action> = () => ({ type: MODE_TOGGLE });
