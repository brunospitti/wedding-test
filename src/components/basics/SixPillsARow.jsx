import React from 'react'
import styled from 'styled-components'

import { Pill } from './Pill'

import { breakpoints } from '../../assets/globalStyles'

export const SixPillsARow = props => (
  <StyledPillsHolder className="pills-holder">
    {props.pills.map((pill, i) => (
      <Pill primary key={pill} pill={pill} />
    ))}
  </StyledPillsHolder>
)

const StyledPillsHolder = styled.ul`
  margin-bottom: 60px;
  li {
    font-size: 18px;
    width: 187px;
    margin-bottom: 12px;
    margin-left: 0;
    &:not(:first-child) {
      margin-left: 0;
    }
    &:not(:nth-child(6n - 5)) {
      margin-left: 11px;
    }
    @media ${breakpoints.workPillFixes} {
      width: 172px;
      &:not(:nth-child(6n - 5)) {
        margin-left: 10px;
      }
    }
    @media ${breakpoints.desktopSmall} {
      width: 32%;
      margin-bottom: 15px;
      &:not(:nth-child(6n - 5)) {
        margin-left: 0;
      }
      &:not(:nth-child(3n -2)) {
        margin-left: 2%;
      }
    }
    @media ${breakpoints.tablet} {
      margin-left: 0 !important;
      width: 48%;
      &:not(:nth-child(2n + 1)) {
        margin-left: 4% !important;
      }
    }
    @media ${breakpoints.mobile} {
      &#play-framework {
        font-size: 13px;
        padding: 11px 7px 8px;
        line-height: 18px;
      }
      &#google-analytics {
        font-size: 12px;
        line-height: 25px;
        padding: 8px 7px 5px;
      }
    }
  }
`
