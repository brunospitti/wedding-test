import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { colors } from '../../assets/globalStyles'

export class Button extends React.PureComponent {
  getMainColor = () => {
    let mainColor = colors.greyLight
    if (this.props.primary) {
      mainColor = colors.primary
    } else if (this.props.secondary) {
      mainColor = colors.secondary
    } else if (this.props.white) {
      mainColor = '#ffffff'
    }

    return mainColor
  }

  render() {
    return (
      <StyledButton
        type={this.props.buttonType || 'button'}
        onClick={this.props.clickBehavior}
        mainColor={this.getMainColor()}
        className={this.props.className}
      >
        {this.props.text}
      </StyledButton>
    )
  }
}

// styled components
const StyledButton = styled('button')`
  cursor: pointer;
  background: ${props => props.mainColor};
  border: 0;
  padding: 10px 30px;
  border-radius: 3px;
  color: ${colors.light};
  margin: 10px auto;
  transition: all 0.25s ease;
  &:hover {
    background: ${props => lighten(0.04, props.mainColor)};
  }
`
