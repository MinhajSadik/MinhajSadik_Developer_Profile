// import React, { useEffect } from 'react';
// import './LoveToDo.css';
// import { MdLibraryBooks, MdComputer } from 'react-icons/md';
// import { GiWorld } from 'react-icons/gi';
// import { FaMotorcycle } from 'react-icons/fa';
// import Aos from "aos";
// import "aos/dist/aos.css";

// const LoveToDo = () => {

//     useEffect(() => {
//         Aos.init({ duration: 2000 });
//     }, [])

//     return (

//         <div className="container loveToDo">
//             <div className="back-line d-flex align-items-center skill-title">
//                 <div className="front-box d-flex align-items-center">
//                     <p className="d-flex align-items-center">LoveToDo</p>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-sm-6 col-md-3">
//                     <div data-aos="flip-right" className="love-style">
//                         <h3 className="blog-icon"><MdLibraryBooks /></h3>
//                         <h3 className="blog-title">Blogging</h3>
//                     </div>
//                 </div>
//                 <div className="col-sm-6 col-md-3">
//                     <div data-aos="flip-right" className="love-style">
//                         <h3 className="blog-icon"><GiWorld /></h3>
//                         <h3 className="blog-title">Traveling</h3>
//                     </div>
//                 </div>
//                 <div className="col-sm-6 col-md-3">
//                     <div data-aos="flip-right" className="love-style">
//                         <h3 className="blog-icon"><MdComputer /></h3>
//                         <h3 className="blog-title">Computing</h3>
//                     </div>
//                 </div>
//                 <div className="col-sm-6 col-md-3">
//                     <div data-aos="flip-right" className="love-style">
//                         <h3 className="blog-icon"><FaMotorcycle /></h3>
//                         <h3 className="blog-title">Biking</h3>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default LoveToDo;

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import styles from "./../../styles.module.css";

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);

export default function App() {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={3}
        horizontal
      >
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
}
