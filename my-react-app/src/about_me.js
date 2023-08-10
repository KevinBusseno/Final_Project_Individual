import React from 'react';
import './App.css';


const AboutMe = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="app.js">Home</Link></li>
            <li><Link href="about_me.js">About Me</Link></li>
            <li><Link href="projects.html">Projects</Link></li>
            <li><Link href="privacy_policy.html">Privacy Policy</Link></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <section>
          <h2>Introduction</h2>
          <p>Hello! My name is Kevin Busseno, and I'm excited to share a little bit about myself with you.</p>
        </section>
        <section>
          <h2>Background</h2>
          <p>I come from Ringwood New Jersey, and I have a background in Business and Information Systems. I'm passionate about Coding.</p>
        </section>
        <section>
          <h2>Experience</h2>
          <p>Over the years, I've had the opportunity to work on robots, battlebots, and manage multiple websites. I gained valuable skills in SolidWorks, Inventor, Fusion 360, Java, Python, PHP, G-Code, MS Office, PowerPoint, Excel, Access, AutoCAD, Docs, Gmail, Drive, Sheets, WordPress. I'm always eager to learn and take on new challenges.</p>
        </section>
        <section>
          <h2>Hobbies</h2>
          <p>When I'm not working, I enjoy gaming, hiking, and I love to hangout with friends.. It's a great way for me to relax and unwind.</p>
        </section>
        <footer>
          <div className="personal-data">
            <p>John Doe © 2023</p>
            <p><a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
            <p><a href="tel:+1234567890">123-456-7890</a></p>
            <p>123 Main St, Anytown, USA</p>
            <a href="#" className="print-link" onClick={() => window.print()}>Print this resume</a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/johndoe"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/johndoe"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com/johndoe"><i className="fab fa-github"></i></a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutMe;
