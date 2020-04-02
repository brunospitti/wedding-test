import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { GlobalStyles, outerContainer } from '../../assets/globalStyles';

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <StyledLayout>{children}</StyledLayout>
        <GlobalStyles />
      </React.Fragment>
    )}
  />
);

const StyledLayout = styled.div`
  ${outerContainer}
`;
