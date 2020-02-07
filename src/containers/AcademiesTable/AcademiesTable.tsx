import React, { useState, useEffect, useCallback } from 'react';
import useHttp from '../../hooks/htttp.hook';

import Table from '../../components/Table';

const AcademiesTable: React.FunctionComponent = () => {
  const { loading, request } = useHttp();
  const [academies, setAcademies] = useState([]);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isPrev, setIsPrev] = useState<number>(0);
  const [lastAcademy, setLastAcademy] = useState<string>('');
  const [firstAcademy, setFirstAcademy] = useState<string>('');

  const LIMIT = '?limit=10';

  const fetchAcademies = useCallback(
    async param => {
      try {
        const fetched = await request(`/academies${param}`, 'GET');
        setAcademies(fetched.data);
        setIsNext(fetched.hasMore);
        return fetched;
      } catch (e) {
        throw e;
      }
    },
    [request]
  );

  useEffect(() => {
    fetchAcademies(LIMIT);
  }, [fetchAcademies]);

  const getLastAcademy = useCallback(
    data => {
      if (isNext) {
        // eslint-disable-next-line no-underscore-dangle
        setLastAcademy(`${LIMIT}&startingAfter=${data[data.length - 1]._id}`);
      }
    },
    [isNext]
  );

  const getFirstAcademy = useCallback(
    data => {
      if (isPrev) {
        // eslint-disable-next-line no-underscore-dangle
        setFirstAcademy(`${LIMIT}&endingBefore=${data[0]._id}`);
      }
    },
    [isPrev]
  );

  useEffect(() => {
    getLastAcademy(academies);
    getFirstAcademy(academies);
  }, [getFirstAcademy, getLastAcademy, academies]);

  const clickNextHandler = () => {
    fetchAcademies(lastAcademy).then(() => setIsPrev(isPrev + 1));
  };
  const clickPrevHandler = () => {
    fetchAcademies(firstAcademy)
      .then(() => setIsPrev(isPrev - 1))
      .then(() => setIsNext(true));
  };

  if (loading) {
    return <span> Loading..</span>;
  }

  return (
    <>
      <Table academies={academies} />
      {!!isPrev && (
        <button type="button" onClick={() => clickPrevHandler()}>
          PREVIOUS
        </button>
      )}
      {isNext && (
        <button type="button" onClick={() => clickNextHandler()}>
          NEXT
        </button>
      )}
    </>
  );
};

export default AcademiesTable;
