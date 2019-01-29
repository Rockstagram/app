import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentPanel } from 'components';
import { Helper } from 'controllers';
import './FeatureLocked.css';

export default class FeatureLocked extends Component {
  render() {
    const items = [
      {
        title: 'Get Professional',
        listItems: ['Access to Insta-Cleaner', 'Use Medium & Fast Speed'],
        buttonText: 'Get Professional'
      },
      {
        title: 'Get Ultimate !',
        listItems: [
          'Access to Insta-Cleaner',
          'Access to Insta-Commenter',
          'Access to Insta-Messenger',
          <span>
            Use <strong className="italic">Maximum Speed</strong> !
          </span>
        ],
        buttonText: 'Get Ultimate'
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
