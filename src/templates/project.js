import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";

import { colors, breakpoints } from "../assets/globalStyles";

import Layout from "../components/helpers/Layout";
import { TextFromString } from "../components/helpers/Content";
import { NonStretchedImg } from "../components/basics/NonStretchedImg";
import { Header } from "../components/basics/Header";
import { ProjectPageTitle } from "../components/basics/ProjectPageTitle";


export const ProjectTemplate = ({
  helmet,
  project,
  projectImgs
}) => {
  let projectScreenshot = project.screenshot
  let projectImg = projectScreenshot != null ? projectImgs.filter(img => img.node.fluid.originalName === projectScreenshot.relativePath)[0] : ""
  return (
    <StyledProjectPage>
    {helmet || ""}
      <Header pageTitle={project.title}/>
      <ProjectPageTitle title="Description"/>
      <TextFromString
        text={project.description}
      />
      {projectImg != "" &&
        <NonStretchedImg fluid={projectImg.node.fluid} />
      }
    </StyledProjectPage>
  );
};

const Project = ({ data }) => {
  const project = data.project.frontmatter
  const projectImgs = data.projectImgs.edges;

  return (
    <Layout>
      <ProjectTemplate
        project={project}
        projectImgs={projectImgs}
        helmet={
          <Helmet titleTemplate="Bruno Spitti | %s">
            <title>{`${project.title}`}</title>
            <meta
              name="description"
              content={`${project.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  );
};

const StyledProjectPage = styled.section`
  h1 {
    padding: 0;
    font-size: 30px;
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
    projectImgs: allImageSharp{
      edges{
        node{
          id
          fluid(maxWidth: 1240 ) {
          originalName
          presentationWidth
          ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;