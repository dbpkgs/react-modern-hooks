export type Options = {
  headers?: Record<string, string | number | boolean>;
};

export type SearchResponse<T> = [
  state: T,
  setState: (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => void,
];

export type StateCallbackResponse<T> = [
  state: T,
  setState: (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => void,
];

export type OS = 'Mac OS' | 'iOS' | 'Windows' | 'Android' | 'Linux' | null;

export type OSResponse = {
  os: OS;
};

export type MutableObjectRef = React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;

export type OnlineResponse = {
  online: boolean;
};
