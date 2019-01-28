import React from 'react';
import { Redirect } from 'react-router-dom';
import { LINKS } from 'Routes';

const ProFeature = children => {
  const user = {};
  if (false || user.isPro) {
    return children;
  } else {
    return <Redirect to={LINKS.getPro} />;
  }
};

export default ProFeature;
