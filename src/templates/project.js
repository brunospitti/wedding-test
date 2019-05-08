import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";

import { colors, breakpoints } from "../assets/globalStyles";

import Layout from "../components/helpers/Layout";
import { TextFromString } from "../components/helpers/Content";
import { ImgHolder } from "../components/basics/ImgHolder";
import { Pill } from "../components/basics/Pill";
import { Header } from "../components/basics/Header";
import { ProjectPageTitle } from "../components/basics/ProjectPageTitle";
import { Logo } from "../components/basics/Logo";

export const ProjectTemplate = ({ helmet, project, projectImgs }) => {
  let projectScreenshot = project.screenshot;
  let projectImg =
    projectScreenshot != null
      ? projectImgs.filter(
          img => img.node.fluid.originalName === projectScreenshot.relativePath
        )[0]
      : "";
  return (
    <StyledProjectPage>
      {helmet || ""}

      <Header pageTitle={project.title} />
      <StyledTextBlock>
        <ProjectPageTitle title="Description" />
        <TextFromString text={project.description} />
      </StyledTextBlock>

      {projectImg != "" && <ImgHolder fluidImg={projectImg.node.fluid} />}

      <StyledTextBlock>
        <ProjectPageTitle title="What I Learned" />
        <TextFromString text={project.what_i_learned} />
      </StyledTextBlock>

      <StyledTextBlock>
        <ProjectPageTitle title="Technologies used" />
        <StyledPillHolder>
          {project.technologies.map(tech => (
            <Pill primary key={tech} pill={tech} />
          ))}
        </StyledPillHolder>
      </StyledTextBlock>

      <StyledTextBlock>
        <ProjectPageTitle title="Check for yourself" />
        <StyledATag tertiary href={project.live_url} target="_blank">
          View live project
        </StyledATag>
        <StyledATag
          secondary
          marginLeft
          href={project.github_url}
          target="_blank"
        >
          View github repo
        </StyledATag>
      </StyledTextBlock>

      <Logo />
    </StyledProjectPage>
  );
};

const Project = ({ data }) => {
  const project = data.project.frontmatter;
  const projectImgs = data.projectImgs.edges;

  return (
    <Layout>
      <ProjectTemplate
        project={project}
        projectImgs={projectImgs}
        helmet={
          <Helmet titleTemplate="Bruno Spitti | %s">
            <title>{`${project.title}`}</title>
            <meta name="description" content={`${project.description}`} />
          </Helmet>
        }
      />
    </Layout>
  );
};

const StyledProjectPage = styled.section`
  h1 {
    padding: 0;
    font-size: 33px;
    letter-spacing: 25px;
    width: 85%;
    margin: 0 auto 2vh;
  }
`;

export default Project;

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        index
        templateKey
        title
        brief_description
        screenshot {
          relativePath
        }
        description
        what_i_learned
        technologies
        live_url
        github_url
      }
    }
    projectImgs: allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 1240) {
            originalName
            presentationWidth
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const StyledTextBlock = styled.div`
  margin: 8vh 0;
`;

const StyledPillHolder = styled.div``;

const StyledATag = styled.a`
  padding: 12px 30px 15px;
  border-radius: 7px;
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  margin-top: 10px;
  display: inline-block;
  background: ${props => (props.tertiary ? colors.tertiary : colors.secondary)};
  margin-left: ${props => props.marginLeft && "50px"};
`;
