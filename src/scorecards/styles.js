import styled from "styled-components";

export const Scorecard = styled.div`
  padding: 10px 0;

  h3 {
    color: ${props => props.theme.colours.dark}
    padding: 5px 0 10px;
    margin: 0;
    font-weight: normal;
  }
`;

export const ScorecardPanel = styled.div`
  padding: 5px 0;
  overflow-x: auto;
  width: 100%;
  background-color: #f8fbfe;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(187, 187, 187, 1);
  -moz-box-shadow: 0px 0px 3px 0px rgba(187, 187, 187, 1);
  box-shadow: 0px 0px 3px 0px rgba(187, 187, 187, 1);

  table {
    table-layout: fixed;
    text-align: center;
    width: 100%;
    min-width: 700px;
    border-collapse: collapse;
    color: ${props => props.theme.colours.dark};
  }

  thead th {
    border-bottom: 1px solid #dddddd;
  }

  thead th,
  tbody,
  td {
    width: 4%;
    padding: 5px 5px;

    &:last-child {
      width: 50px;
      text-align: right;
    }
  }

  tr:first-child {
    color: #bbb;
    font-weight: bold;
  }

  th,
  td {
    text-align: center;

    &:nth-child(1) {
      width: 50px;
      text-align: left;
    }

    span {
      margin: 0 auto;
    }
  }
`;

export const birdie = styled.span`
  display: block;
  line-height: 25px;
  width: 25px;

  -moz-border-radius: 50%;
  border-radius: 50%;

  border: 0.1em solid ${props => props.theme.colours.dark};
`;

export const eagle = styled(birdie);

export const par = styled(birdie)`
  border: 0.1em solid ${props => props.theme.colours.secondDark};
`;

export const bogie = styled.span`
  display: block;
  line-height: 22px;
  width: 22px;

  border: 2px solid ${props => props.theme.colours.dark};
`;

export const double = styled(bogie)`
  background-color: ${props => props.theme.colours.dark};
  color: white;
`;

export const worse = styled(bogie)`
  background-color: ${props => props.theme.colours.dark};
  border: 2px solid ${props => props.theme.colours.highlight};
  color: white;
`;
