import React, { useState, useEffect } from 'react';
import useHttp from '../../hooks/http.hook';

import Table from '../../components/Table';

const AcademiesTable: React.FunctionComponent = () => {
  const { loading, request, error } = useHttp();
  const [academies, setAcademies] = useState([]);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [prev, setIsPrev] = useState<number>(0);
  const [query, setQuery] = useState('?limit=10');

  useEffect(() => {
    const fetchAcademies = async (param: string) => {
      try {
        const result = await request(`/academies${param}`, 'GET');
        setAcademies(result.data);
        setIsNext(result.hasMore);
      } catch (e) {}
    };
    fetchAcademies(query).then(() => {
      if (query.includes('endingBefore')) {
        setIsNext(true);
      }
    });
  }, [query, request]);

  const clickNextHandler = (data: string | any[]) => {
    // eslint-disable-next-line no-underscore-dangle
    setQuery(`?limit=10&startingAfter=${data[data.length - 1]._id}`);
    setIsPrev(prev + 1);
  };

  const clickPrevHandler = (data: string | any[]) => {
    // eslint-disable-next-line no-underscore-dangle
    setQuery(`?limit=10&endingBefore=${data[0]._id}`);
    setIsPrev(prev - 1);
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <>
      <Table academies={academies} />
      {Boolean(prev) && (
        <button type="button" onClick={() => clickPrevHandler(academies)}>
          PREVIOUS
        </button>
      )}
      {isNext && (
        <button type="button" onClick={() => clickNextHandler(academies)}>
          NEXT
        </button>
      )}
    </>
  );
};

export default AcademiesTable;
