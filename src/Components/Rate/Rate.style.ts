import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ButtonRate = styled.button`
  background: var(--white);
  margin-left: 15px;
  min-width: 40px;
  height: 30px;
  border-radius: 30px;
  color: var(--darkGrey);
  border: 0;
  font-size: var(--fontSmall);
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
