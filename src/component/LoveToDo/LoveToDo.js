import React, { useEffect } from 'react';
import './LoveToDo.css';
import { MdLibraryBooks, MdComputer } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';
import { FaMotorcycle } from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";

const LoveToDo = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (

        <div className="container loveToDo">
            <div className="back-line d-flex align-items-center skill-title">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">LoveToDo</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div data-aos="flip-right" className="love-style">
                        <h3 className="blog-icon"><MdLibraryBooks /></h3>
                        <h3 className="blog-title">Blogging</h3>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div data-aos="flip-right" className="love-style">
                        <h3 className="blog-icon"><GiWorld /></h3>
                        <h3 className="blog-title">Traveling</h3>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div data-aos="flip-right" className="love-style">
                        <h3 className="blog-icon"><MdComputer /></h3>
                        <h3 className="blog-title">Computing</h3>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div data-aos="flip-right" className="love-style">
                        <h3 className="blog-icon"><FaMotorcycle /></h3>
                        <h3 className="blog-title">Biking</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoveToDo;