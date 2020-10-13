import { ModeProps } from '@app/store/mode/types';
import { ChatProps } from '@app/store/chats/types';
import { ProfileProps } from '@app/store/profile/types';

namespace Data {
  export interface Message {
    id?: number | string;
    text: string;
    author: string;
    chatId?: string | number;
  }
  export interface ColorMode {
    mode: 'night' | 'day';
  }
  export interface Chat {
    id: number;
    title: string;
    messages?: Message[];
  }
  export interface Profile {
    name: string;
    age: number;
  }
}

export type { Data };

export interface RootState {
  chats: ChatProps;
  mode: ModeProps;
  profile: ProfileProps;
  router: any;
}
