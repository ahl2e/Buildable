import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {


  const foot = () => (
    <section id="footer-box">
      <div id="footer-container">
        <div className="footer-icon" ></div>
        <div className='bio-box'>
          <h4>Adam Long</h4>
          <p>email:</p>
          <p>adamlong1066@gmail.com</p>
          <br/>
          <p>phone:</p>
          <p>615 418 6621</p>
        </div>
        <div id="footer-links">
          <h4>My Sites</h4>
            <Link to="http://www.adamhlong.com/">Personal Site</Link>
            <br/>
            <Link to="https://github.com/ahl2e">Github</Link>
            <br/>
            <Link to="https://www.linkedin.com/in/adam-long-7b379945/">LinkedIn</Link>
        </div>
      </div>
      <div id="line-box"></div>
    </section>
  )


    return foot();
};


export default Footer
