import { useState, useCallback } from 'react';

const API_URL = 'https://test.api.sportstars.club';

const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const request = useCallback(
    async (
      url: string,
      method: string,
      body?: any | JSON['stringify'],
      headers?: Record<string, string>
    ) => {
      setLoading(true);
      try {
        if (body) {
          // eslint-disable-next-line no-param-reassign
          body = JSON.stringify(body);
          // eslint-disable-next-line no-param-reassign
          headers = {
            'Content-Type': 'application/json; charset=utf-8',
          };
        }
        const response = await fetch(API_URL + url, {
          method,
          body,
          headers,
        });
        const result = await response.json();
        if (!response.ok) {
          throw Error(result.message || 'Something went wrong');
        }
        return result;
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );
  const clearError = useCallback(() => setError(''), []);
  return { loading, request, error, clearError };
};

export default useHttp;
