import styled from 'styled-components';

export const ChartContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h3 {
    margin-bottom: 16px;
    font-size: 1.2rem;
    color: #333;
  }

  svg {
    width: 20%;
    height: auto;

    @media screen and (max-width:768px){
        width: 100%;
    }
  }
`;
