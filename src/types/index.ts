export type Options = {
  headers?: Record<string, string | number | boolean>;
};

export type OS = 'Mac OS' | 'iOS' | 'Windows' | 'Android' | 'Linux' | null;

export type MutableObjectRef = React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;

export type SearchResponse<T> = [
  state: T,
  setState: (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => void,
];

export type StateCallbackResponse<T> = [
  state: T,
  setState: (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => void,
];

export type ResizeResponse = {
  width: number;
  height: number;
};

export type ImageDownloadResponse = {
  downloadImage: (imgUrl: string) => void;
  error: unknown;
  loading: boolean;
};

export type FocuResponse = {
  focused: boolean;
  setFocus: () => void;
};

export type OSResponse = {
  os: OS;
};

export type OnlineResponse = {
  online: boolean;
};

export type FetchResponse<T> = {
  data: T | null;
  loading: boolean;
  error: unknown;
  refetch: () => void;
};

export type DeviceDetectResponse = {
  isMobile: boolean;
  device: string;
};

export interface NavigatorInformation extends Navigator {
  mozConnection?: Navigator['connection'];
  webkitConnection?: Navigator['connection'];
}

export interface INetworkInformation extends NetworkInformation {
  downlink: number;
  downlinkMax: number;
  effectiveType: string;
  onchange: (e?: any) => void;
  rtt: number;
  saveData: boolean;
  type: ConnectionType;
}

export type NetworkResponse = {
  connection: INetworkInformation;
};
