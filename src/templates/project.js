import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/helpers/Layout";
import Content, { HTMLContent } from "../components/helpers/Content";
import { NonStretchedImg } from "../components/basics/NonStretchedImg";

export const ProjectTemplate = ({
  helmet,
  project,
  projectImgs
}) => {
  let projectScreenshot = project.screenshot
  let projectImg = projectScreenshot != null ? projectImgs.filter(img => img.node.fluid.originalName === projectScreenshot.relativePath)[0] : ""
  return (
    <section className="section">
    {helmet || ""}
      <div>{project.title}</div>
      {projectImg != "" &&
        <NonStretchedImg fluid={projectImg.node.fluid} />
      }
    </section>
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