import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Thumb.styles';

type Props = {
  image: string;
  movieId?: number;
  clickable: boolean;
};

const Thumb: React.FC<Props> = React.memo(({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
});

export default Thumb;
