import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #eef2f6;
  min-height: 100vh;

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .charts-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
`;

export const SummaryCard = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    color: #34495e;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #7f8c8d;
  }

  .icon {
    font-size: 2.5rem;
    color: #3498db;
    margin-bottom: 10px;
  }
`;
