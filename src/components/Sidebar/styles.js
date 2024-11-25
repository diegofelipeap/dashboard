import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? '250px' : '95px')};
  background-color: #a9a9a9;
  padding: ${({ isOpen }) => (isOpen ? '20px' : '5px')};
  height: 100vh;
  transition: width 0.3s ease;
`;

export const SidebarItem = styled.div`
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
      color: #007bff;
    }
  }
`;

export const ToggleButton = styled.button`
  background-color: #f5fffa;
  width: 50px;
  border-radius: 5px;
  border: none;
  color: #333;
  cursor: pointer;
  margin-bottom: 20px;
`;
