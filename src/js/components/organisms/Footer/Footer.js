import React from 'react';

import { Helper } from 'controllers';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer" onClick={Helper.website}>
      <a href="#" className="Footer__link">
        rockstagram.io
      </a>
    </footer>
  );
};

export default Footer;
