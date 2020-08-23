import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Segment = ({ title, children }) => {
  return (
    <S.Segment>
      {title && <h2>{title}</h2>}
      {children}
    </S.Segment>
  );
};

Segment.propTypes = {
  title: PropTypes.string
};

export default Segment;
