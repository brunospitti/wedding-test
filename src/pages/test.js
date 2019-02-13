import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/helpers/Layout";

import { Menu } from "../components/Menu";
import Main from "../components/Main";
import Hello from "../components/Hello";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";

export default class TestPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        asdasdasdasd
      </Layout>
    );
  }
}


export const testQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/react/" }) {
      fluid(maxWidth: 1240 ) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
