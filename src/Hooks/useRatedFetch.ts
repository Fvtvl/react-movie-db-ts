import { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '../contex';
import API, { Rating } from '../API';

export const useRatedFetch = (movieId: string) => {
  const [user] = useContext(Context);
  console.log('useRatedFetch  user', user);
  const [rating, setRating] = useState<Rating>();

  const fetchRated = useCallback(async () => {
    try {
      if (user?.sessionId) {
        const isRated = await API.isMovieRated(movieId, user.sessionId);
        setRating(isRated);
      }
    } catch (error) {}
  }, [movieId, user]);

  useEffect(() => {
    fetchRated();
  }, [fetchRated, movieId, user]);
  return { rating };
};
