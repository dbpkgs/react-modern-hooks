export interface FetchOptions extends Omit<RequestInit, 'method'> {
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH';
}

export type OS = 'Mac OS' | 'iOS' | 'Windows' | 'Android' | 'Linux' | null;

export type MutableObjectRef = React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;

export type CommonStateResponse<T> = [
  state: T,
  setState: (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => void,
];

export type SearchResponse<T> = CommonStateResponse<T>;

export type StateCallbackResponse<T> = CommonStateResponse<T>;

export interface ResizeResponse {
  width: number;
  height: number;
}

export interface ImageDownloadResponse {
  downloadImage: (imgUrl: string) => void;
  error: unknown;
  loading: boolean;
}

export interface FocuResponse {
  focused: boolean;
  setFocus: () => void;
}

export interface OSResponse {
  os: OS;
}

export interface OnlineResponse {
  online: boolean;
}

export interface FetchResponse<T> {
  data: T | null;
  loading: boolean;
  error: unknown;
  refetch: () => void;
  processRequest: (url: string, options?: FetchOptions) => void;
}

export interface DeviceDetectResponse {
  isMobile: boolean;
  device: string;
}

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

export interface NetworkResponse {
  connection: INetworkInformation;
}
