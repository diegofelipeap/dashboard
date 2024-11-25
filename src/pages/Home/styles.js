import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f9;
  min-height: 100vh;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  .welcome-message {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 40px;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;
