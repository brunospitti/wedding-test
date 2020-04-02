import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/helpers/Layout';

const NotFoundPage = () => (
  <Layout footerLogo={false}>
    <Styled404Page>
      <Styled404Text>
        <h2>I don't have this page you're looking for...</h2>
        <p>
          Why don't we go back to the <Link to="/">home page</Link>?
        </p>
      </Styled404Text>
    </Styled404Page>
  </Layout>
);

const Styled404Page = styled.section`
  h1 {
    padding: 0;
    font-size: 33px;
    letter-spacing: 25px;
    width: 85%;
    margin: 0 auto 2vh;
  }
`;

const Styled404Text = styled.div`
  padding: 23.4vh 0;
  text-align: center;
  h2 {
    margin-bottom: 2vh;
  }
`;

export default NotFoundPage;
