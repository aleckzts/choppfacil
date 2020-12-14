import styled from 'styled-components';

export const HeaderText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;
  flex-wrap: wrap;

  strong {
    font-size: 24px;
    margin: 16px 0;
  }
`;

export const Brands = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  margin-top: 16px;

  li {
    margin: 8px;
    padding: 8px;
    background: #f3f2f5;
    border: 2px solid #f3f2f5;
    height: 80px;
    border-radius: 8px;
    /* padding: 32px 24px 16px; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    cursor: pointer;
  }

  .selected {
    background: #fff;
    border: 2px solid #ff9000;
  }

`;

export const SuggestButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: #ff9000;
    height: 48px;
    border-radius: 10px;
    border: 0;
    margin: 16px 0 32px;
    padding: 0 16px;
    color: #312e38;
  }
`;
