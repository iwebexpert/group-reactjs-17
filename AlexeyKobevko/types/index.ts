namespace Data {
  export interface Message {
    text: string;
    author: string;
  }
  export interface Indents {
    m?: string;
    mx?: string;
    my?: string;
    mt?: string;
    mr?: string;
    mb?: string;
    ml?: string;
    p?: string;
    px?: string;
    py?: string;
    pt?: string;
    pr?: string;
    pb?: string;
    pl?: string;
  }
  export interface ColorMode {
    mode: string;
  }
}

export type { Data };
