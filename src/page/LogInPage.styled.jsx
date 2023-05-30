import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-top: 50px;
  text-align: center;
`;
export const ContainerLabel = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  display: inline-block;
  font-weight: 700;
  font-size: 50px;
  padding-bottom: 30px;
  color: var(--color-accent);
`;
export const Link = styled(NavLink)`
  display: inline-block;
  padding: 7px 0px;
  width: 200px;
  text-align: center;
  border-radius: 10px;
  font-weight: 700;
  font-size: 24px;
  background-color: var(--color-white);
  color: var(--color-primary-bg);
  cursor: pointer;
  border: 1px solid var(--color-secondary-bg);
  &:hover,
  &:focus,
  &.active {
    background-color: var(--color-accent);
  }
  &:first-of-type {
    margin-right: 20px;
  }
`;

export const ContainerLink = styled.div`
  margin-bottom: 30px;
`;
