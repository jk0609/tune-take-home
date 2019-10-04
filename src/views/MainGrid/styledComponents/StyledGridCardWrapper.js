import styled from 'styled-components';

export default styled.div`
  width: 290px;
  height: 175px;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 10px;
  background-color: white;

  .card-header {
    display: flex;

    .card-avatar {
      width: 25%;

      img,
      span {
        border-radius: 50%;
        height: 50px;
        width: 50px;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: ${props => props.avatarColor};
        font-size: 1.6em;
        font-weight: 550;
      }
    }

    .card-name {
      width: 75%;
      padding: 5px;
      text-align: left;

      h4 {
        margin: 0;
      }

      p {
        margin: 0;
        font-size: 0.8em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .card-body {
    display: flex;

    .card-graph {
      width: 60%;
      text-align: center;

      .graph-label {
        font-size: 11px;
        margin: auto;
      }
    }

    .card-metrics {
      width: 40%;
      text-align: right;

      p {
        margin: 0;
      }

      .impressions-count,
      .conversions-count {
        font-size: 1em;
        font-weight: 600;
      }

      .impressions-count {
        color: orange;
      }

      .conversions-count {
        color: blue;
      }

      .impressions-label,
      .conversions-label {
        font-size: 0.8em;
        color: grey;
      }

      .revenue-count {
        margin-top: 5px;
        font-size: 1.2em;
        font-weight: bold;
        color: green;
      }
    }
  }
`;
