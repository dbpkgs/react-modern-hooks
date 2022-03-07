export type Options = {
  headers?: Record<string, string | number | boolean>;
};

export type OS = 'Mac OS' | 'iOS' | 'Windows' | 'Android' | 'Linux' | null;

export type OSResponse = {
  os: OS;
};

export type MutableObjectRef = React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;

export type OnlineResponse = {
  online: boolean;
};
