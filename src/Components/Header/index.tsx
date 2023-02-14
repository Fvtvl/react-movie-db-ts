import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import {
  Wrapper,
  Content,
  LogoImg,
  TMDBLogoImg,
  ExitImg,
  Login,
  UserLog,
  Box,
} from './Header.style';
import { Context } from '../../contex';

const Header: React.FC = () => {
  const [user, setUser] = useContext(Context);
  const handleLogout = useCallback(() => {
    setUser(undefined);
  }, [setUser]);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        {user ? (
          <Box>
            <UserLog>{user.username}</UserLog>
            <ExitImg onClick={handleLogout}>
              <BiExit />
            </ExitImg>
          </Box>
        ) : (
          <Link to="/login">
            <Login>Log In</Login>
          </Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
