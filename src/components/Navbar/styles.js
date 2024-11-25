import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;
