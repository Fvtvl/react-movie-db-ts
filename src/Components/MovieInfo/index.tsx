import React, { useContext, FC } from 'react';
//component
import Thumb from '../Thumb';
import Rate from '../Rate';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.jpg';
import { Content, Wrapper, Text } from './MovieInfo.styles';
import { MovieState } from '../../Hooks/useMovieFetch';
import API from '../../API';

import { Context } from '../../contex';

type Props = {
  movie: MovieState;
  rated?: number;
};

const MovieInfo: FC<Props> = React.memo(({ movie, rated }) => {
  const [user, setUser] = useContext(Context);

  const handleRating = async (value: number) => {
    if (user?.sessionId) {
      const rate = await API.rateMovie(
        user.sessionId,
        movie.id,
        value.toString()
      );
      setUser({
        ...user,
        rating: value,
      });
    }
  };

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATTING</h3>
              <div className="score">{movie.vote_average.toFixed(1)}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          {user && <Rate callback={handleRating} rated={rated} />}
          {rated && (
            <div className="personal-rate">
              <h3>Your personal rate:</h3>
              <div className="score">{rated}</div>
            </div>
          )}
        </Text>
      </Content>
    </Wrapper>
  );
});

export default MovieInfo;
