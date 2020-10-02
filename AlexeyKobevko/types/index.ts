namespace Data {
  export interface Message {
    id?: number;
    text: string;
    author: string;
  }
  export interface ColorMode {
    mode: string;
  }
  export interface Chat {
    id: number;
    title: string;
    messages: Message[];
  }
}

export type { Data };
