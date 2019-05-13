import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import { GlobalStyles } from "../../assets/globalStyles";

const TemplateWrapper = ({ children }) => (
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
    render={data => (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <link
            rel="shortcut icon"
            href="/img/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <React.Fragment>{children}</React.Fragment>
        <GlobalStyles />
      </React.Fragment>
    )}
  />
);

export default TemplateWrapper;
