import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';

import { useSiteMetadata } from 'hooks';

import Container from 'components/Container';

const Header = () => {
  const { companyName, companyUrl } = useSiteMetadata();

  return (
    <header>
      <p>Covid-19 Tracker</p>
    </header>
  );
};

export default Header;
