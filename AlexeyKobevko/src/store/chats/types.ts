import { Data } from '@types';

export interface ChatProps {
  loading: boolean;
  entries: Data.Chat[];
  error: boolean;
}
