import styled from "styled-components";

export const Segment = styled.div`
  padding-bottom: 30px;
  >h2 {
    margin-bottom: 10px;
    font-weight: normal;
    color: ${props => props.theme.colours.dark}
    border-bottom: 1px solid ${props => props.theme.colours.light};
  }
`;
