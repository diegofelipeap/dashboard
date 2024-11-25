import styled from 'styled-components';

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

export const NotificationCard = styled.div`
  padding: 16px;
  border-radius: 8px;
  color: #ffffff;
  background-color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#4caf50';
      case 'error':
        return '#f44336';
      case 'warning':
        return '#ff9800';
      default:
        return '#9e9e9e';
    }
  }};
`;
