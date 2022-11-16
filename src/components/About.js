import React from 'react'
import './About.css';
import img from '../images/img.png';
import img1 from '../images/img1.jpg';
import img3 from '../images/img3.jpg';
export default function About() {
  return (
    <div>
      <h1>IT</h1>
      <div className="container">
        <h1 className='ser'>About our web site<br/></h1>
        <p>write something about our website here.</p>
      </div>

      <div className="container" style={{ alignItems: "center" }}>
        <div className="section-title">
          <h1>Our Team members</h1>
        </div>
        <div className="container" style={{ marginLeft: '150px', 'padding': '20px' }}>
          <div className="row">
            <div className="column">
              <div className="team">
                <div className="team-img">
                  <img src={img} alt="Team" />
                </div>
                <div className="team-content">
                  <h2>Nizam</h2>
                  <h3>20h65a1216</h3>
                  <p>Some text goes here that describes about team members</p>
                  <p>Nizamthepioneer @gmail.com</p>
                </div>

              </div>
            </div>
            <div className="column">
              <div className="team">
                <div className="team-img">
                  <img src={img3} alt="Team" />
                </div>
                <div className="team-content">
                  <h2>hruday preetam</h2>
                  <h3>19h61a12g4</h3>
                  <p>Some text goes here that describes about team members</p>
                  <p>hrudaypreetham @gmail.com</p>
                </div>

              </div>
            </div>
            <div className="column">
              <div className="team">
                <div className="team-img">
                  <img src={img1} alt="Team" />
                </div>
                <div className="team-content">
                  <h2>Farhan</h2>
                  <h3>19h61a12c2</h3>
                  <p>Some text goes here that describes about team members</p>
                  <p>Farhan @gmail.com</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='container1'>
        <p className='ser'>our support and services</p>
        <p className='ser'>Read the latest news head lines here and save your time to search for the best news 
          from here to any news website.
        </p>
        <div className="aligner">
        <ul>
          <h3>Services</h3>
          <li>General</li>
          <li>Entertainment</li>
          <li>Health</li>
        </ul>
        <ul>
          <h3>Quick links</h3>
          <li>Science</li>
          <li>Sports</li>
          <li>Technology</li>
       

        </ul>
        <ul>
          <h3>Quick links</h3>
          <li>Business</li>
          <li>About</li>
          <li>News buzz</li>
        

        </ul>
        <ul>
          <h3>Find us</h3>
          <p className='ser'>you can contact us through the mails<br></br>above mentioned to suggest or complain bug.
          <br></br>or to @newsbuzz@gmail.co.in</p>

        </ul>
        
        </div>
       <h4 className='ser'> copyRight policy @2022 all rights reserved to news buzz.com .</h4>
        </footer>
      <footer />
    </div>
  )
}
