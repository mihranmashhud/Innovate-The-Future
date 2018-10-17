import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

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
`

export default props => <StyledLink {...props} />
