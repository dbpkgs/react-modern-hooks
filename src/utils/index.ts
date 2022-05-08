export const processImage = (blob: Blob, filename?: string) => {
  const link = document.createElement('a');
  document.documentElement.append(link);
  const objectURL = URL.createObjectURL(blob);
  link.setAttribute('download', filename ?? '');
  link.href = objectURL;
  link.click();
  link.remove();
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
