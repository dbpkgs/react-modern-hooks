export const processImage = (buffer: ArrayBuffer, filename?: string) => {
  const url = window.URL.createObjectURL(new Blob([buffer]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${filename}`);
  document.body.appendChild(link);
  link.click();
};

export const debounce = (callback: <T = never>(props: T) => unknown, delay: number) => {
  let _tId = 0;
  clearTimeout(_tId);
  // @ts-expect-error ts-migrate(2322): FIXME: Type 'Timeout' is not assignable to type 'number'
  _tId = setTimeout(callback, delay);
};

export const regexURL =
  // eslint-disable-next-line no-useless-escape
  /(\b((www\.)|((https?|http?|ftp|file):\/\/+?)(www\.)?)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?)/gi;

export const isFullScreenElement = (el: Element): boolean => {
  if (el) {
    return Boolean(
      document.fullscreenElement === el ||
        document.mozFullScreenElement === el ||
        document.webkitFullscreenElement === el ||
        document.msFullscreenElement === el,
    );
  }

  return Boolean(
    document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement ||
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.fullScreenMode,
  );
};
