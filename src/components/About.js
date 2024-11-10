import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>LET ME INTRODUCE MYSELF</h2>
      <p>I fell in love with programming and I have at least learnt something, I think... <span role="img" aria-label="shrug">🤷‍♂️</span></p>
      <p>I am fluent in classics like <span className="highlight">C++, Javascript, and Go.</span></p>
      <p>My field of interest is building new <span className="highlight">Web Technologies and Products</span> and also in areas related to <span className="highlight">Blockchain.</span></p>
      <p>Whenever possible, I also apply my passion for developing products with <span className="highlight">Node.js</span> and <span className="highlight">Modern Javascript Libraries</span> like <span className="highlight">React.js</span> and <span className="highlight">Next.js.</span></p>
      <div className="avatar-container">
        {/* Add your avatar here */}
        <img src="/path-to-your-avatar.png" alt="Avatar" />
      </div>
    </section>
  );
}
export default About;
