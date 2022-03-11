import { useState } from 'react';
import { ImageDownloadResponse } from '../types';
import { processImage } from '../utils';

/**
 * useImageDownload - Hook to download images
 *
 * @returns {unknown} error - Error message returned during image download
 * @returns {boolean} loading - Loading state when image is still being downloaded
 * @return {Function} downloadImage - Download image function to allow downloading images from the endpoint
 *
 */
const useImageDownload = (): ImageDownloadResponse => {
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
