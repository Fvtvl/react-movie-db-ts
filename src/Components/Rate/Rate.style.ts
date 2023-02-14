import styled from 'styled-components';

export const ButtonRate = styled.button`
  background: var(--white);
  /* width: 25%; */
  min-width: 40px;
  height: 30px;
  border-radius: 30px;
  color: var(--darkGrey);
  border: 0;
  font-size: var(--fontMed);
  margin: 20px auto;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
