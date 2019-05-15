import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

export const Logo = () => (
  <StaticQuery
    query={graphql`
      query LogoImg {
        allFile: file(relativePath: { eq: "bruno-spitti-logo.png" }) {
          childImageSharp {
            fixed(width: 139, height: 139) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledLogoHolder>
        <Img fixed={data.allFile.childImageSharp.fixed} />
      </StyledLogoHolder>
    )}
  />
);

const StyledLogoHolder = styled.div`
  padding: 50px;
  text-align: center;
`;
