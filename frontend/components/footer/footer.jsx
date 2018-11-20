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

            <a href="http://www.adamhlong.com/" target="_blank">Personal Site</a>
            <br/>
            <a href="https://github.com/ahl2e" target="_blank">Github</a>
            <br/>
            <a href="https://www.linkedin.com/in/adam-long-7b379945/" target="_blank">LinkedIn</a>
        </div>
      </div>
      <div id="line-box"></div>
    </section>
  )


    return foot();
};


export default Footer
