import React from 'react';
import PropTypes from 'prop-types'
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import Profile from '../assets/img/Profile.jpg';

const SocialCard = (props) => {
    return (
        <div className="content-wrapper">
            <div className="col-left">
                <a 
                    href="https://www.linkedin.com/in/cardenasj97/" 
                    title="See profile" 
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <img src={Profile} className="img profile-img" alt="lorem" />            
                </a>
            </div>
            <div className="col-right">
                <CardHeader name={props.author} account={props.account} date={props.date} />
                <CardBody message={props.message} author={props.author} />
                <CardFooter 
                    commentsQuantity={props.commentsQuantity} 
                    retweetsQuantity={props.retweetsQuantity}
                    likesQuantity={props.likesQuantity}
                />
            </div>            
        </div> 
    );
};

SocialCard.propTypes = {
    author: PropTypes.string,
    account: PropTypes.string,
    date: PropTypes.string,
    message: PropTypes.string,
    commentsQuantity: PropTypes.string,
    retweetsQuantity: PropTypes.string,
    likesQuantity: PropTypes.string
};

export default SocialCard;