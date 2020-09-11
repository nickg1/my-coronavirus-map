import React from 'react';
import { useSiteMetadata } from 'hooks';
import Container from 'components/Container';
import axios from 'axios';


const Footer = () => {
  const { authorName, authorUrl } = useSiteMetadata();

  return (
    <footer>
      <Container>
        <p>
          &copy; { new Date().getFullYear() }, <a href={authorUrl}></a>
       My Site </p>
      </Container>
    </footer>
  );
};

export default Footer;
