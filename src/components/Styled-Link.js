import React, { Component } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  border: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default props => (
  <StyledLink scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start" })} {...props} />
);
