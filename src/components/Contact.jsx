import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import { colors, breakpoints } from '../assets/globalStyles'

import withMainContainer from '../hocs/withMainContainer'
import { TextFromString } from './helpers/Content'
import { SectionTitle } from './basics/SectionTitle'
import { ContactTile } from './basics/ContactTile'
import { ContactForm } from './basics/ContactForm'

export default class Contact extends React.PureComponent {
  ContactContent = () => (
    <React.Fragment>
      <SectionTitle title={this.props.sectionTitle} />
      <StyledFigure />
      <TextFromString
        text={this.props.sectionText}
        style={{ marginBottom: '5vh' }}
      />
      <div style={{ marginBottom: '10vh' }}>
        {this.props.contactIntoTitles.map((contact, i) => (
          <ContactTile
            key={contact}
            contactInfoTitle={this.props.contactIntoTitles[i]}
            contactInfoInfo={this.props.contactIntoInfo[i]}
            contactInfoURL={this.props.contactIntoURL[i]}
          />
        ))}
      </div>
      <ContactForm />
    </React.Fragment>
  )

  render() {
    let ContactWithMainContainer = withMainContainer(this.ContactContent)
    return (
      <StyledMainSection className="homepage-section" id="lets-chat-section">
        <ContactWithMainContainer />
      </StyledMainSection>
    )
  }
}

const StyledMainSection = styled.section`
  position: relative;
  padding: 10vh 0 5vh;
  h3 {
    @media ${breakpoints.tablet} {
      font-size: 46px;
      letter-spacing: 20px;
    }
  }
`

const StyledFigure = styled.div`
  background: ${rgba(colors.secondary, 0.1)};
  margin-top: -60px;
  margin-left: -50px;
  position: absolute;
  z-index: -1;
  border-radius: 100000px;
  left: -21.3%;
  top: 10px;
  width: 270px;
  height: 270px;
  @media ${breakpoints.mobile} {
    width: 200px;
    height: 200px;
    left: -160px;
    margin-left: 0;
    top: 80px;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -25px;
    width: 150px;
    height: 280px;
    background: white;
  }
`
