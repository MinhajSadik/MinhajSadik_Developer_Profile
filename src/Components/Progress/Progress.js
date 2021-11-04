import React, { useEffect } from 'react';
import './Progress.css';
import Aos from "aos";
import "aos/dist/aos.css";


const Progress = ({ done, title }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (

        <div className="col-12 col-sm-12 col-md-6">
            <div data-aos="flip-left" className="backStyle">
                <div className="container1">
                    <h5 className="titleStyle">{title}</h5>
                    <div className="progressbar-container">
                        <div className="progressbar-complete" style={{ width: `${done}%` }}>
                            <div className="progressbar-liquid"></div>
                        </div>
                        <span className="progress">{done}%</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Progress;

