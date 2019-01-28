import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "./GenericTemplate.css";
import { Footer, Header, MainMenu } from "components";

const GenericTemplate = ({
  title,
  header,
  menu,
  children,
  footer,
  ...props
}) => {
  const fullTitle = title ? `${title} - Rockstagram` : "Rockstagram";
  return (
    <React.Fragment>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      <div className="GenericTemplate">
        <div className="header">{header || <Header title={fullTitle} />}</div>
        <div className="menu">{menu || <MainMenu />}</div>
        <div className="main">{children}</div>
        <div className="footer">{footer || <Footer />}</div>
      </div>
    </React.Fragment>
  );
};

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  footer: PropTypes.object,
  header: PropTypes.object,
  menu: PropTypes.object,
  title: PropTypes.string
};

export default GenericTemplate;
