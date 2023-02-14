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
} from './Header.style';
import { Context } from '../../contex';
import { handleSignUp } from '../../helpers';

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
          <>
            <UserLog>{user.username}</UserLog>
            <ExitImg onClick={handleLogout}>
              <BiExit />
            </ExitImg>
          </>
        ) : (
          <>
            <Link to="/login">
              <Login>Log In</Login>
            </Link>
            <Login onClick={() => handleSignUp()}>Sign Up</Login>
          </>
        )}
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
