import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentPanel } from 'components';
import { Helper } from 'controllers';
import './FeatureLocked.css';

export default class FeatureLocked extends Component {
  render() {
    const items = [
      {
        title: 'Get Professional !',
        listItems: [
          'Full access to all features',
          'No time limit',
          <span>
            Use <strong className="italic">Maximum Speed</strong> !
          </span>
        ],
        buttonText: 'Get Professional'
      }
    ].map((item, key) => (
      <React.Fragment key={key}>
        <ContentPanel className="FeatureLocked__panel">
          <h3 className="h3">{item.title}</h3>
          <ul className="ul">
            {item.listItems.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </ContentPanel>
        <a
          onClick={Helper.upgrade}
          className="btn btn--cta FeatureLocked__cta"
          href="#"
        >
          {item.buttonText}
          &nbsp;
          <FontAwesomeIcon icon="play-circle" />
        </a>
      </React.Fragment>
    ));

    return (
      <div className="FeatureLocked">
        <h2 className="h2">
          <FontAwesomeIcon icon="lock" />
          &nbsp; Upgrade to access this feature
        </h2>
        <div className="FeatureLocked__container">{items}</div>
      </div>
    );
  }
}
