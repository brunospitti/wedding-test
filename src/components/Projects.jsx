import React from 'react'
import styled from 'styled-components'

import { breakpoints } from '../assets/globalStyles'

import withMainContainer from '../hocs/withMainContainer'
import { SectionTitle } from './basics/SectionTitle'
import { TextFromString } from './helpers/Content'
import { ProjectTile } from './basics/ProjectTile'
import { Button } from './basics/Button'

export default class Projects extends React.PureComponent {
  state = {
    showMore: false,
  }

  showMoreFunc = () => {
    this.setState({ showMore: !this.state.showMore })
  }

  ProjectsContent = () => (
    <React.Fragment>
      <SectionTitle title={this.props.sectionTitle} />
      <StyledTextFromString text={this.props.sectionText} />
      <StyledProjectTilesOuter>
        <StyledProjectTilesHolder
          className={this.state.showMore ? 'expanded' : 'collapsed'}
        >
          {this.props.projects.map(({ node: project }) => {
            const info = project.frontmatter
            return (
              <ProjectTile
                key={info.title}
                projectTitle={info.title}
                projectBriefDesc={info.brief_description}
                projectURL={project.fields.slug}
              />
            )
          })}
        </StyledProjectTilesHolder>
        <StyledButtonHolder>
          <Button
            white
            clickBehavior={this.showMoreFunc}
            text={
              this.state.showMore ? 'Show less projects' : 'Show more projects'
            }
          />
        </StyledButtonHolder>
      </StyledProjectTilesOuter>
    </React.Fragment>
  )

  render() {
    let ProjectsWithMainContainer = withMainContainer(this.ProjectsContent)

    return (
      <StyledMainSection className="homepage-section" id="projects-section">
        <ProjectsWithMainContainer />
      </StyledMainSection>
    )
  }
}

const StyledMainSection = styled.section`
  position: relative;
  padding: 10vh 0 5vh;
`

const StyledProjectTilesOuter = styled.div`
  margin-bottom: 250px;
  @media ${breakpoints.mobile} {
    margin-bottom: 160px;
  }
`

const StyledProjectTilesHolder = styled.div`
  &.expanded {
    max-height: auto;
    overflow: initial;
  }
  &.collapsed {
    max-height: 930px;
    overflow: hidden;
  }
`

const StyledTextFromString = styled(TextFromString)`
  margin-bottom: 150px;
  @media ${breakpoints.mobile} {
    margin-bottom: 100px;
  }
`

const StyledButtonHolder = styled.div`
  position: absolute;
  bottom: 250px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 9999;
  @media ${breakpoints.mobile} {
    bottom: 160px;
  }
  button {
    border-bottom: 1px solid;
    border-radius: 0;
  }
`
