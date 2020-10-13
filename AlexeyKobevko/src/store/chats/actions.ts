import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Data, RootState } from '@types';

export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';

// TODO
export const CHATS_FIRE = 'CHATS_FIRE';
export const CHATS_UNFIRE = 'CHATS_UNFIRE';

// export const chatsLoadAction = () => ({
//   type: CHATS_LOAD,
// });

// export const chatsMessageSendAction = (message: Data.Message) => ({
//   type: CHATS_MESSAGE_SEND,
//   payload: message,
// });

// export const chatsAddAction = (chatId: string | number, title: string) => ({
//   type: CHATS_ADD,
//   payload: { chatId, title },
// });

// TODO
export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';

export const chatsMessageSendAction: ActionCreator<Action> = (message: Data.Message) => ({
  type: CHATS_MESSAGE_SEND,
  payload: message,
});

export const chatsAddAction: ActionCreator<Action> = (chatId: number, title: string) => ({
  type: CHATS_ADD,
  payload: { chatId, title },
});

export const chatsLoadRequestAction: ActionCreator<Action> = () => ({
  type: CHATS_LOAD_REQUEST,
});

export const chatsLoadSuccessAction: ActionCreator<Action> = (data: Data.Chat[]) => ({
  type: CHATS_LOAD_SUCCESS,
  payload: data,
});

export const chatsLoadFailureAction: ActionCreator<Action> = (error: any) => ({
  type: CHATS_LOAD_FAILURE,
  payload: error,
});

export const chatsLoadAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async dispatch => {
  try {
    dispatch(chatsLoadRequestAction());
    const result = await fetch('http://localhost:8000/chats?_embed=messages');
    dispatch(chatsLoadSuccessAction(await result.json()));
  } catch (error) {
    dispatch(chatsLoadFailureAction(error));
  }
};
