import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Badge = ({ initials }) => {
  return <S.Badge>{initials}</S.Badge>;
};

Badge.propTypes = {
  initials: PropTypes.string
};

export default Badge;
