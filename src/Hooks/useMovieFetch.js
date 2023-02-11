import { useCallback, useEffect, useState } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);

      const directors = credits.crew.filter(
        (member) => member.job === 'Director'
      );

      setState({
        ...movie,
        actors: credits.cast,
        directors,
      });

      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [movieId]);

  useEffect(() => {
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      console.log('from session');
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
    console.log('fetching data');
  }, [fetchMovie, movieId]);

  useEffect(() => {
    if (state.id === Number(movieId))
      sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
