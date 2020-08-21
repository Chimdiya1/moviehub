import React from 'react';
import "./footer.styles.scss"

const Footer = () => {
    return (
        <footer className="footer-container container-fluid">
            <div className="footer-text">
                <h4>Questions? Contact us.</h4>
                <div className="footer-links row">
                    <div className="footer-box col-md-4">
                        <ul>
                            <li>FAQ</li>
                            <li>Investors Relations</li>
                            <li>Privacy</li>
                            <li>Speed Test</li>
                        </ul>
                    </div>
                    <div className="footer-box col-md-4">
                        <ul>
                            <li>Account</li>
                            <li>Ways To Watch</li>
                            <li>Corporate Information</li>
                            <li>MovieHub Originals</li>
                        </ul>
                    </div>
                    <div className="footer-box col-md-4">
                        <ul>
                            <li>Media Center</li>
                            <li>Term Of Use</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;