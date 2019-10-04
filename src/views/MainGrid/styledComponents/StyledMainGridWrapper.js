import styled from 'styled-components';

export default styled.div`
  text-align: center;

  label {
    margin: auto;
    color: #fff;
    font-weight: 450;
  }

  #sort-dropdown {
    margin-left: 10px;
    border-radius: 5px;
    padding: 5px 10px;
  }

  .main-grid {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      margin: 10px;
    }
  }
`;
