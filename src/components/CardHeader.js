import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CardHeader = (props) => {
    return (
        <div>
            <a 
                className="ht1" 
                href="https://www.linkedin.com/in/cardenasj97/"
                title="See profile"
                rel="noopener noreferrer"
                target="_blank"
            >{props.name}</a>
            <span className="ht2">@{props.account} • {props.date}</span>
            <span className="ht3" title="Options">
                <FontAwesomeIcon icon={faChevronDown} />
            </span>
        </div>
    );
};

CardHeader.propTypes = {
    name: PropTypes.string,
    account: PropTypes.string,
    date: PropTypes.string
};

export default CardHeader;