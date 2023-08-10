import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <body>
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
          <div className="hero" style={{ fontSize: '20px' }}>
            <h1>Welcome to My Portfolio</h1>
            <p>Exploring the world of robotics and coding.</p>
          </div>

          <div id="bio" style={{ padding: '50px', backgroundColor: '#f4f4f4' }}>
            <h2>About Me</h2>
            <p>Embarking on a journey to forge a career in coding, this individual is driven by an insatiable curiosity for the world of technology and its limitless possibilities. Guided by a passion for problem-solving and a keen eye for detail, they embrace the art of translating ideas into elegant lines of code. With each challenge conquered, they find themselves not just unraveling the intricacies of programming languages, but also unraveling their own potential. Armed with a tenacious spirit, they eagerly embrace the ever-evolving landscape of software development, tirelessly learning and adapting to stay at the forefront of innovation. As they tread this path, they remain fueled by the excitement of creating digital solutions that can shape the way we interact with the world, all while steadfastly building the foundation of a promising coding career.</p>
          </div>

          <div id="contact" style={{ padding: '50px' }}>
            <h2>Contact Me</h2>
            <p>If you're interested in discussing projects, collaborating, or just want to say hello, feel free to get in touch. Sign up with your email to stay updated on my latest endeavors.</p>
          </div>
        </div>

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
      </body>
      
    </div>
  );
}

export default App;
