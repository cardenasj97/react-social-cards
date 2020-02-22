import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faHeart, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const CardFooter = (props) => {
    return (
        <div className="footer-container">
            <span className="f-actions" style={{ 'opacity': '0.4' }} title="Comments">
                <FontAwesomeIcon icon={faComment} className="f-icon" />
                {props.commentsQuantity}
            </span>
            <span className="f-actions" style={{ 'color': '#28d228' }} title="Retweets">
                <FontAwesomeIcon icon={faRetweet} className="f-icon" />
                {props.retweetsQuantity}
            </span>
            <span className="f-actions" style={{ 'color': '#ff0461' }} title="Likes">
                <FontAwesomeIcon icon={faHeart} className="f-icon" />
                {props.likesQuantity}
            </span>
            <span className="f-actions" style={{ 'opacity': '0.4' }} title="Private Message">
                <FontAwesomeIcon icon={faEnvelope} />
            </span>
        </div>
    );
};

CardFooter.propTypes = {
    commentsQuantity: PropTypes.string,
    retweetsQuantity: PropTypes.string,
    likesQuantity: PropTypes.string
};

export default CardFooter;