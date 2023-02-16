import styled from 'styled-components';

export const Wrapper = styled.header`
  background: var(--darkGrey);
  padding: 0 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 10px 0;
  margin: 0 auto;
  color: var(--white);
  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 115px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 60px;
  }
`;

export const Login = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

export const UserLog = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

export const ExitImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
