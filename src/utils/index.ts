export const processImage = (buffer: ArrayBuffer, filename?: string) => {
  const url = window.URL.createObjectURL(new Blob([buffer]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${filename}`);
  document.body.appendChild(link);
  link.click();
};

export const debounce = (callback: <T = any>(props: T) => any, delay: number) => {
  let _tId: number = 0;
  clearTimeout(_tId);
  // @ts-expect-error ts-migrate(2322): FIXME: Type 'Timeout' is not assignable to type 'number'
  _tId = setTimeout(callback, delay);
};

export const regexURL =
  /(\b((www\.)|((https?|http?|ftp|file):\/\/+?)(www\.)?)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
