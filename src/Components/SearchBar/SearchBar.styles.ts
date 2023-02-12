import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    ::placeholder {
      color: var(--ashGrey);
    }

    :focus {
      outline: none;
    }
  }
`;
export const SearchImage = styled.div`
  position: absolute;
  left: 15px;
  top: 14px;
  font-size: 30px;
`;

export const CloseImage = styled.div`
  position: absolute;
  right: 15px;
  top: 14px;
  font-size: 30px;
  color: var(--ashGrey);

  :hover {
    color: var(--white);
  }
`;