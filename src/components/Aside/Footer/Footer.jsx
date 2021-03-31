import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                created by{' '}
                <a
                    href="https://github.com/jeyofdev"
                    target="_blank"
                    rel="noreferrer"
                >
                    jeyofdev
                </a>{' '}
                - devChallenges.io
            </p>
        </footer>
    );
};

export default Footer;
