import styled from '@emotion/styled';

export const HeaderPage = styled.header`
  padding: 20px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-secondary-bg);
`;

export const Logo = styled.p`
  display: inline-block;
  font-weight: 700;
  font-size: 30px;
  color: var(--color-accent);
`;

export const Name = styled.p`
  display: inline-block;
  font-weight: 500;
  font-size: 25px;
  margin-right: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Btn = styled.button`
  padding: 5px 15px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 24px;
  background-color: var(--color-white);
  color: var(--color-primary-bg);
  cursor: pointer;
  border: 1px solid var(--color-secondary-bg);
  &:hover,
  &:focus {
    background-color: var(--color-accent);
  }
`;
