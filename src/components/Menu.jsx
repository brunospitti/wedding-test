import React from 'react'
import styled, { keyframes } from 'styled-components'

import { slugify } from '../assets/helpers'

import { colors, breakpoints } from '../assets/globalStyles'
import { scrollToElement } from '../assets/isElementVisible'

export class Menu extends React.PureComponent {
  state = {
    sectionNames: ['home', 'about me', 'projects', 'work', "let's chat"],
    expandMenu: false,
  }

  handleMouseOver = bool => {
    this.setState({ expandMenu: bool })
  }

  render() {
    return (
      <StyledMenu
        className={this.state.expandMenu ? 'show' : 'hide'}
        onMouseOver={() => this.handleMouseOver(true)}
        onMouseLeave={() => this.handleMouseOver(false)}
      >
        <ul>
          {this.state.sectionNames.map(section => (
            <StyledMenuItem
              key={section}
              onClick={() => scrollToElement(slugify(section))}
              className={`menu-item`}
              id={slugify(section)}
            >
              <div className="menu-item-holder">
                <i />
                {this.state.expandMenu && (
                  <div className="menu-item">{section}</div>
                )}
              </div>
            </StyledMenuItem>
          ))}
        </ul>
      </StyledMenu>
    )
  }
}

const expandsMenu = keyframes`
  0% {
    width: 100px;
  }
  100% {
    width: 280px;
  }
`

const compressMenu = keyframes`
  0% {
    width: 280px;
  }
  100% {
    width: 100px;
  }
`

const expandsMenuText = keyframes`
  0% {
    opacity: 0;
    font-size: 10px;
  }
  100% {
    opacity: 1;
    font-size: 22px;
  }
`

const compressMenuText = keyframes`
  0% {
    opacity: 1;
    font-size: 22px;
  }
  100% {
    opacity: 0;
    font-size: 10px;
  }
`

const StyledMenu = styled.div`
  width: 100px;
  padding: 30px;
  padding-right: 0;
  position: fixed;
  right: 0;
  top: 35vh;
  z-index: 999999;
  &.show {
    background: #f7f7f7;
    background: linear-gradient(to right, #f5f5f5 0%, #ffffff 100%);
    animation: ${expandsMenu} 0.2s ease forwards;
    ul {
      li {
        .menu-item {
          animation: ${expandsMenuText} 0.1s ease forwards;
        }
      }
    }
  }
  &.hide {
    animation: ${compressMenu} 0.2s ease forwards;
    ul {
      li {
        .menu-item {
          animation: ${compressMenuText} 0.1s ease forwards;
        }
      }
    }
  }
  @media ${breakpoints.mobile} {
    display: none;
  }
`

const StyledMenuItem = styled.li`
  text-align: right;
  margin-bottom: 5px;
  margin-right: 40px;
  height: 30px;
  @media ${breakpoints.tablet} {
    margin-right: 20px;
  }
  .menu-item-holder {
    display: inline-block;
    cursor: pointer;
    i {
      height: 15px;
      width: 15px;
      background: white;
      border: 2px solid ${colors.greyLight};
      border-radius: 5000px;
      float: right;
      margin-top: 10px;
      margin-left: 15px;
    }
    .menu-item {
      display: inline-block;
    }
  }
  &.active {
    i {
      background: ${colors.tertiary};
      border: none;
    }
  }
`
