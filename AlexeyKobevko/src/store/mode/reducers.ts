import { Mode, ModeProps } from './types';
import { MODE_TOGGLE } from './actions';

const initialState: ModeProps = {
  mode: Mode.night,
};

export const modeReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case MODE_TOGGLE:
      return {
        ...state,
        mode: state.mode === Mode.night ? Mode.day : Mode.night,
      };
    default:
      return state;
  }
};
