import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './InfoPanel.css';

class InfoPanel extends Component {
  state = {
    open: false
  };

  toggleOpen = e => {
    e.stopPropagation();
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { cObj } = this.props;
    const { title, shortDesc, icon, link, disabled } = cObj;

    const infoClass = `InfoPanel__info InfoPanel__info--${open && 'open'}`;
    const features = cObj.features.map((f, i) => <li key={i}>{f}</li>);
    return (
      <div className="InfoPanel">
        <Link
          to={link}
          className={`InfoPanel__link ${disabled ? 'disabled' : ''}`}
          exact="true"
        >
          <FontAwesomeIcon icon={icon} className="InfoPanel__icon" />
          <h2 className="h1">{title}</h2>
          <p>{shortDesc}</p>
          <div className={infoClass}>
            <ul className="ul">{features}</ul>
            <em>{cObj.longDesc}</em>
          </div>
        </Link>
        <button
          type="button"
          className="InfoPanel__help"
          onClick={this.toggleOpen}
        >
          <FontAwesomeIcon icon="question-circle" />
        </button>
      </div>
    );
  }
}

export default InfoPanel;
