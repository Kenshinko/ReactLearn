import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';

import { selectAnimeFacts, selectAnimeFactsLoading, selectError } from '../../store/animefacts/selector';
import { getAnimeFacts } from '../../store/animefacts/actions';

import './animefacts.css';

export const AnimeFacts = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectAnimeFactsLoading);
  const animeFacts = useSelector(selectAnimeFacts);

  const getData = async () => {
    dispatch(getAnimeFacts());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Факты об аниме</h1>
      <button onClick={getData}>Обновить</button>
      {error && <h2>Error: {error.message}</h2>}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className='animelist'>
          {animeFacts.map((facts) => (
            <div key={facts.anime_id} className='animelist__title anime'>
              <div className='anime'>
                <img className='anime__img' src={facts.anime_img} />
                <p className='anime__name'>{facts.anime_name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};