import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: auto;
`;

export const Card = styled.div`
  margin: 8px;
  width: 16.6666%;
  text-align: center;

  > div {
    height: 60px;
  }

  svg {
    height: 100%;
  }
`;

export const NameDescription = styled.p`
  display: block;
  text-align: center;
  font-family: 'Lucida Console', Consolas;
  word-break: break-all;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, min-content);
  grid-gap: 1rem;
`;

export const MiniCard = styled.div`
  svg {
    width: 60px;
  }
`;
