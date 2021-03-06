import styled from "styled-components";

export const WhiteClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
  color: white;
  &:before,
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: white;
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:before {
    transform: rotate(45deg);
  }
`;

export const Cog = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  margin-top: -40px;
  opacity: 0.3;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  z-index: 1;
  background-color: #080f5b;
  text-align: center;
  color: white;
  padding-top: 32px;

  h2 {
    border-bottom: 1px solid #fff;
    padding: 1em;
    margin-bottom: 1em;
  }
`;

export const PanelContainer = styled.div`
  max-width: 330px;
  margin: 0 auto;
`;

export const Button = styled.div`
  background: ${props => (props.selected ? props.theme.colours.highlight : "")};
  color: ${props => (props.selected ? "black" : props.theme.colours.highlight)};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #15db95;
  border-radius: 3px;
`;
