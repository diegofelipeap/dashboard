import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.textSecondary};
`;

export const Value = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
`;
