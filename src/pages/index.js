import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/helpers/Layout";
import { isElementVisible } from "../assets/isElementVisible";

import { Footer } from "../components/basics/Footer";
import { Menu } from "../components/Menu";
import Main from "../components/Main";
import Hello from "../components/Hello";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Contact from "../components/Contact";

export default class IndexPage extends React.PureComponent {
  componentDidMount() {
    document.querySelector(".menu-item#home").classList.add("active");
    window.onscroll = function() {
      isElementVisible();
    };
  }
  render() {
    const { data } = this.props;
    const generalInfo = data.generalInfo.edges[0].node.frontmatter;
    const projects = data.projects.edges;
    const workExperiences = data.workExperiences.edges;

    return (
      <Layout>
        <Menu sectionTitles={generalInfo.sectiontitles} />
        <Main mainTech={generalInfo.mainTech} />
        <Hello
          sectionTitle={generalInfo.sectiontitles[0]}
          sectionText={generalInfo.hello}
        />
        <Projects
          projects={projects}
          sectionTitle={generalInfo.sectiontitles[1]}
          sectionText={generalInfo.projects}
        />
        <WorkExperience
          workExperiences={workExperiences}
          sectionTitle={generalInfo.sectiontitles[2]}
        />
        <Contact
          sectionTitle={generalInfo.sectiontitles[3]}
          sectionText={generalInfo.contact}
          contactIntoTitles={generalInfo.contactIntoTitles}
          contactIntoInfo={generalInfo.contactIntoInfo}
          contactIntoURL={generalInfo.contactIntoURL}
        />
        <Footer />
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
