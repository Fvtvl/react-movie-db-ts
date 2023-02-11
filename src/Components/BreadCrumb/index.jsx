import React from 'react';
import { Link } from 'react-router-dom';
import { Content, Wrapper } from './BreadCrumb.styles';
import PropTypes from 'prop-types';

const BreadCrumb = React.memo(({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
});
BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};

export default BreadCrumb;
