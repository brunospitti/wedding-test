import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/helpers/Layout";
import IndexProjects from "../components/IndexProjects";
import IndexWorkExperience from "../components/IndexWorkExperience";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const workExperiences = data.workExperiences.edges;
    const projects = data.projects.edges;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            <IndexWorkExperience workExperiences={workExperiences} />
            <IndexProjects projects={projects} />
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          ...ProjectFields
        }
      }
    }
    workExperiences: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "workExperience" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          ...WorkFields
        }
      }
    }
  }
`;
export const fragmentProjects = graphql`
  fragment ProjectFields on MarkdownRemark {
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
`;

export const fragmentWorks = graphql`
  fragment WorkFields on MarkdownRemark {
    frontmatter {
      index
      title
      period
      brief_description
      technologies
    }
  }
`;
