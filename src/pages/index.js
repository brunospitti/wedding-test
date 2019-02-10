import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/helpers/Layout";

import { Menu } from "../components/Menu";
import Main from "../components/Main";
import IndexProjects from "../components/IndexProjects";
import IndexWorkExperience from "../components/IndexWorkExperience";

export default class IndexPage extends React.PureComponent {
  render() {
    const { data } = this.props;
    const generalInfo = data.generalInfo.edges[0].node.frontmatter;
    const projects = data.projects.edges;
    const workExperiences = data.workExperiences.edges;

    return (
      <Layout>
        <Menu sectionTitles={generalInfo.sectiontitles} />
        <Main mainTech={generalInfo.mainTech} />
        <IndexWorkExperience workExperiences={workExperiences} />
        <IndexProjects projects={projects} />
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
    generalInfo: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "generalInfo" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          ...GeneralInfoFields
        }
      }
    }
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

export const fragmentGeneral = graphql`
  fragment GeneralInfoFields on MarkdownRemark {
    frontmatter {
      mainTech
      sectiontitles
      hello
      projects
      contact
      contactIntoTitles
      contactIntoInfo
      contactIntoURL
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
