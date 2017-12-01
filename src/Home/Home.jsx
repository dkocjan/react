import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: lavenderblush;
`,
      Heading = styled.h1`
padding: 15px 0 15px 0px;
text-align: center;
`

const Home = () => (
  <Wrapper>
    <Heading>React Boilerplate</Heading>
  </Wrapper>
);

export default Home;
