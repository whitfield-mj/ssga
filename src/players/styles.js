import styled from 'styled-components';
import respondTo from '../themes/breakPoints';

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

  ${respondTo.md`
    flex: 30%;
    flex-grow: 1
    &:nth-of-type(3n + 2) {
      margin-left: 10px;
      margin-right: 10px;
    } 
    &:not(:nth-of-type(3n + 2)) {
      margin-left: 0px;
      margin-right: 0px;
    } 
  `}
`;

export const Stats = styled.div`
  margin: 0 10px;
  flex-grow: 1;
`;

export const MainStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const AverageScore = styled.div`
  flex-grow: 1;
  padding-bottom: 5px;
`;

export const AverageOver = styled.div`
  font-size: 0.6em;
  ${respondTo.sm`
     font-size 1em; 
  `}
`;

export const LatestRound = styled.div`
  font-size 0.6em; 
`;
