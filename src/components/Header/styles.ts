import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #211e28;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25); */
  color: #f3f2f5;
`;

export const Content = styled.div`
  flex: 1;
  height: 60px;
  display: flex;
  align-items: center;

  margin: 0 auto;
  padding: 0 32px;
  max-width: 1280px;
`;

export const Logo = styled.div`
  display: flex;
  height: 60px;
  flex-direction: row;
  align-items: center;

  font-family: 'Ubuntu', serif;
  font-weight: 700;
  font-size: 18px;

  span {
    flex: 1;
  }

  img {
    margin: 0 16px;
    height: 56px;
    margin-right: 32px;
  }
`;
