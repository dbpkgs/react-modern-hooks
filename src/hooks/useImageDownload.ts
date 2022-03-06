import { useState } from 'react';

const useImageDownload = () => {
  const [error, setError] = useState<unknown>(null);

  const downloadImage = (imgUrl: string) => {
    const filename = imgUrl.split('/').pop();

    fetch(imgUrl, {
      method: 'GET',
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${filename}`);
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        setError(err);
      });
  };

  return {
    downloadImage,
    error,
  };
};

export default useImageDownload;
