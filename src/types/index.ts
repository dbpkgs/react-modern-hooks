declare global {
  interface Document {
    mozCancelFullScreen?: (options?: FullscreenOptions) => Promise<void>;
    msExitFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    webkitExitFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitFullscreenElement?: Element;
    mozFullScreen?: Element;
    webkitIsFullScreen?: Element;
    fullScreenMode?: boolean;
  }

  interface HTMLElement {
    msRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    mozRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    webkitRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    mozRequestFullScreen?: (options?: FullscreenOptions) => Promise<void>;
  }
}

export interface FetchOptions extends Omit<RequestInit, 'method'> {
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH';
}

export type OS = 'Mac OS' | 'iOS' | 'Windows' | 'Android' | 'Linux' | null;

export type MutableObjectRef = React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>;

export type MutableHTMLObjectRef = React.MutableRefObject<HTMLElement | null>;

export type Handler = (event?: Event) => void;

export type CommonStateResponse<T> = [
  state: T,
  setState: (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => void,
];

export type SearchResponse<T> = CommonStateResponse<T>;

export type StateCallbackResponse<T> = CommonStateResponse<T>;

export interface StorageProps<T = any> {
  setStorageItem: React.SetStateAction<T>;
  storageKey: string;
}

export interface StorageResponse {
  updateStorageItem: <T = any>(storageItem: T) => void;
  getStoredItem: <T = any>() => T | null | undefined;
  removeStoredItem: () => void;
}

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

export interface SelectedTextResponse {
  error: Error | null;
  selectedText: string | Selection | null;
  getSelectedText: () => void;
}

export type Exit = () => void;

export interface GeoLocationFetchResponse {
  ip: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string | null;
  continent_code: string;
  in_eu: boolean;
  postal: string | null;
  latitude: number | null;
  longitude: number | null;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population?: number | null;
  asn?: string | null;
  org?: string | null;
}

export interface GeolocationResponse {
  longitude: number | null;
  latitude: number | null;
  location: GeoLocationFetchResponse | null;
  userIP: string;
  country: string;
  city: string;
  region: string;
  error: unknown;
  loading: boolean;
}

export interface FullscreenResponse {
  fullScreen: boolean;
  open: () => Promise<void> | undefined;
  close: () => Promise<void> | undefined;
  toggle: () => Promise<void> | undefined;
  error: string | null;
}

export interface CopyToClipboardResponse {
  error: string | Error | null;
  copied: boolean;
  copiedText: string | null;
  copyText: (text: string) => Promise<boolean>;
}
