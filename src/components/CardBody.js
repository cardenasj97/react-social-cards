import React from 'react';
import Profile2 from '../assets/img/Profile2.jpg';
import PropTypes from 'prop-types';

const CardBody = (props) => {
    return (
        <div>
            <div style={{ marginTop: '5px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Cras quis volutpat turpis
            </div>
            <div className="box">
                <div className="box-upper-side">
                    <div className="box-upper-content">
                        <img src={Profile2} className="img" style={{ borderRadius: '2px' }} alt="dev.to" />
                    </div>
                    <div className="box-middle-content">{props.message}</div>
                    <div className="box-bottom-content">
                        <span className="bt1">{props.author}</span>
                        <img src={Profile2} className="img" style={{ borderRadius: 'inherit' }} alt="author" />
                    </div>
                </div>
                <div className="box-bottom-side">
                    <div className="ht1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="bt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis volutpat turpis, at iaculis quam. Mauris in volutpat dui, at tincidunt lacus.</div>
                    <div>lorem.ipsum</div>
                </div>
            </div>
        </div>
    );
};

CardBody.propTypes = {
    message: PropTypes.string,
    author: PropTypes.string
};

export default CardBody;