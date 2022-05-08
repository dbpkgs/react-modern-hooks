import { useState } from 'react';
import { ImageDownloadResponse } from '../types';
import { processImage } from '../utils';

/**
 * useImageDownload - Hook that allows download of images from a given url
 *
 * @returns {unknown} error - Error message returned during image download
 * @returns {boolean} loading - Loading state when image is still being downloaded
 * @return {Function} downloadImage - Download image function to allow downloading images from the endpoint
 *
 */
const useImageDownload = (): ImageDownloadResponse => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const downloadImage = (imageSrc: string) => {
    setLoading(true);
    const filename = imageSrc.split('/').pop();

    fetch(imageSrc, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Cross-Origin': 'Anonymous',
        'cache-control': 'no-cache',
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        processImage(blob, filename);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    downloadImage,
    error,
    loading,
  };
};

export default useImageDownload;
