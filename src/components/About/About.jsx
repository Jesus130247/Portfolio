import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
const About = () => {
  const [quals, setQuals] = useState('hidden')
  function handleCick() {
    if (quals === 'hidden') {
      return setQuals('shown')
    } return setQuals('hidden')
  }
  return (
    <section id="about">
      <div className="about-content">
      <h2>About Me</h2>
      <p>My name is Leonardo Manteit. I am a software engineer specializing in web development. I live in Melbourne, Australia and love to stay active and see friends.</p>
      <p>Whenever working on a new project, (which you can check out in my <Link to="portfolio" smooth={true} duration={500} style={{fontWeight: 700, cursor: 'pointer'}}>Portfolio</Link>) 
      I always strive to complete work to the highest quality I can achieve, with great attention to detail. I believe in maintaining constant communication with my clients to achieve the best results.</p>
      <p>Through my studies at <span style={{fontWeight: 700}}>General Assembly's Software Engineering</span> course, 
      I have become proficient in <span style={{fontWeight: 700}}>JavaScript, HTML, CSS, Node.js, React</span> and <span style={{fontWeight: 700}}> PostgreSQL</span>
      <br />I have also studied at <span style={{fontWeight: 700}}>RMIT</span>, completing a <span style={{fontWeight: 700}}>Bachelor of Applied Science (Physics)</span>.
      Here, I developed my problem-solving skills, which are essential in the software world, and I also learned useful languages such as <span style={{fontWeight: 700}}>Python</span> and <span style={{fontWeight: 700}}>MATLAB</span>.</p>
      <br />
      <p>It is my goal to continue to improve my skills and help others at the same time.</p>
      </div>
      <button className='button' onClick={handleCick}>My Qualifications</button>
      <p className={quals}>
        <li>Bachelor Degree in Applied Science (Physics) from RMIT </li>
        <li>Certificate of Completion in Software Engineering from General Assembly (420 hours)</li>
      </p>
    </section>
  );
};

export default About;
