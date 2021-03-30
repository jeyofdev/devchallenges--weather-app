import React from 'react';
import Loader from 'react-loader-spinner';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <Loader
                type="TailSpin"
                color="var(--color-light)"
                height={100}
                width={100}
                timeout={10000}
            />
        </div>
    );
};

export default Loading;
