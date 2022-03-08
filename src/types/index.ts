export type FetchOptions = {
  /** A BodyInit object or null to set request's body. */
  body?: BodyInit | null;
  /** A string indicating how the request will interact with the browser's cache to set request's cache. */
  cache?: RequestCache;
  /** A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials. */
  credentials?: RequestCredentials;
  /** A Headers object, an object literal, or an array of two-item arrays to set request's headers. */
  headers?: HeadersInit;
  /** A cryptographic hash of the resource to be fetched by request. Sets request's integrity. */
  integrity?: string;
  /** A boolean to set request's keepalive. */
  keepalive?: boolean;
  /** A string to set request's method. */
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH';
  /** A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode. */
  mode?: RequestMode;
  /** A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect. */
  redirect?: RequestRedirect;
  /** A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer. */
  referrer?: string;
  /** A referrer policy to set request's referrerPolicy. */
  referrerPolicy?: ReferrerPolicy;
  /** An AbortSignal to set request's signal. */
  signal?: AbortSignal | null;
  /** Can only be null. Used to disassociate request from any Window. */
  window?: null;
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
  processRequest: (url: string, options?: FetchOptions) => void;
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
