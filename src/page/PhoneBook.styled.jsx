import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  padding: 0 200px;
  margin-top: 50px;
  justify-content: space-between;
  align-items: flex-start;
`;
export const SubContainer = styled.div`
  min-width: 50%;
`;

export const TitleH1 = styled.h1`
  font-weight: 700;
  font-size: 55px;
  padding-bottom: 30px;
  color: var(--color-accent);
`;
export const TitleH2 = styled.h2`
  font-weight: 700;
  font-size: 42px;
  padding-top: 20px;
  padding-bottom: 25px;
  color: var(--color-accent);
`;

export const ErrorTitle = styled.p`
  font-size: 28px;
  font-weight: 500;
`;
export const ErrorType = styled.p`
  margin-top: 12px;
  font-size: 20px;
  font-weight: 500;
`;
