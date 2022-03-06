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

  _tId = setTimeout(callback, delay);
};
