import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { fontFamilyTitle, colors, breakpoints } from '../../assets/globalStyles'

import { BrunoSpitti } from './BrunoSpitti'

export const Header = props => (
  <StyledHeader>
    <Link to="/">
      <BrunoSpitti />
    </Link>
    <StyledH2>{props.pageTitle}</StyledH2>
  </StyledHeader>
)

const StyledHeader = styled.div`
  a {
    text-decoration: none;
  }
  h1 {
    @media ${breakpoints.mobile} {
      margin-top: 2vh !important;
      padding-bottom: 1vh !important;
      padding-left: 3% !important;
      line-height: 33px;
      text-align: center;
    }
    @media ${breakpoints.mobileSmall} {
      padding-left: 1.5% !important;
      width: 92% !important;
    }
  }
`

const StyledH2 = styled.h2`
  font-size: 25px;
  color: ${colors.primary};
  text-align: center;
  line-height: 30px;
  margin-bottom: 5vh;
`
