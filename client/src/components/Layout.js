import React from 'react';
import Nav from '../nav/Nav';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

function Layout({ children }) {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  );
}

export default Layout;