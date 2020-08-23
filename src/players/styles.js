import styled from "styled-components";

export const Badge = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colours.highlight};
  background-color: ${props => props.theme.colours.light};
  color: ${props => props.theme.colours.highlight}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayersStatsPanels = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PlayerStatsPanel = styled.div`
  flex: 45%;
  display: flex;
  align-items: center;
  font-size: 1.25em;
  background-color: ${props => props.theme.colours.light};
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  color: white;
  margin-bottom: 10px;
  &:nth-of-type(even) {
    margin-left: 5px;
  }
  &:nth-of-type(odd) {
    margin-right: 5px;
  }
`;

export const Stats = styled.div`
  margin: 0 10px;
  div {
    &:nth-child(2) {
      font-size 12px; 
    } 
  } 
`;
