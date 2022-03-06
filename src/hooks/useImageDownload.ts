import { useState } from 'react';
import { processImage } from '../utils';

const useImageDownload = () => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const downloadImage = (imgUrl: string) => {
    const filename = imgUrl.split('/').pop();
    setLoading(true);
    fetch(imgUrl, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(processImage);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  };

  return {
    downloadImage,
    error,
    loading,
  };
};

export default useImageDownload;
