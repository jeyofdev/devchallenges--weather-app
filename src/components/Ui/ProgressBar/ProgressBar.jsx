import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ completed }) => {
    return (
        <div className="progressBar">
            <div className="percentage">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div className="bar">
                <div className="progress" style={{ width: `${completed}%` }} />
            </div>
            <span>%</span>
        </div>
    );
};

ProgressBar.propTypes = {
    completed: PropTypes.number.isRequired,
};

export default ProgressBar;
