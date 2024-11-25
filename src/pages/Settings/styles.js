import styled from 'styled-components';

export const SettingsContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 90vh;

  h1 {
    font-size: 2.5rem;
    color: #2d3436;
    margin-bottom: 20px;
  }

  .settings-group {
    margin-bottom: 30px;

    h2 {
      font-size: 1.8rem;
      color: #636e72;
      margin-bottom: 15px;
    }

    .setting-item {
      background: #ffffff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;

      label {
        font-size: 1.2rem;
        color: #2d3436;
        display: block;
        margin-bottom: 5px;
      }

      input,
      select {
        width: 100%;
        padding: 10px;
        border: 1px solid #dfe6e9;
        border-radius: 4px;
        font-size: 1rem;
      }
    }
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #ffffff;
    background-color: #0984e3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #74b9ff;
    }
  }
`;
