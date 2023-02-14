import styled from 'styled-components';

export const Wrapper = styled.header`
  background: var(--darkGrey);
  padding: 0 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  /* position: relative; */
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
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;

export const Login = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 250px;
  width: 200px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    left: 30%;
  }
`;

export const UserLog = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 10px;
    margin-bottom: 5px;
  }
`;

export const ExitImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
