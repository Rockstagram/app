import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './FullSizeTemplate.css';
import { Footer, Header } from 'components';

const FullSizeTemplate = ({ title, header, children, footer }) => {
  const fullTitle = title ? `${title} - Rockstagram` : 'Rockstagram';
  return (
    <React.Fragment>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      <div className="FullSizeTemplate">
        <div className="header">{header || <Header title={fullTitle} />}</div>
        <div className="main">{children}</div>
        <div className="footer">{footer || <Footer />}</div>
      </div>
    </React.Fragment>
  );
};

FullSizeTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  footer: PropTypes.object,
  header: PropTypes.object,
  title: PropTypes.string
};

export default FullSizeTemplate;
