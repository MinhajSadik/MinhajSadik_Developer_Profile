import React from 'react';
import './Footer.css';
import { GoRepoForked } from 'react-icons/go';

const Footer = () => {
    return (
        <div className='foooter'>
            <div className="container skill">
                <div className="row copy">
                    <div className="col-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center justify-content-between">
                        <small>Copyright &copy; 2021 ALL Rights Reserved</small>
                        <div className="d-flex align-items-center dev">
                            <a href="https://github.com/MinhajSadik" target="_blank" rel="noopener noreferrer" ><GoRepoForked /></a>
                            <h4> <span className="heart">&hearts;</span> Developed BY Minhaj</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;