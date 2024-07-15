import React from 'react';
import { useState } from 'react';
const About = () => {
  const [quals, setQuals] = useState(false)
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>I am a software engineer specializing in web development.</p>
      <p>I'm a passionate software engineer with experience in building web applications.</p>
      <button onClick={() => setQuals(!quals)}>My Qualifications</button>
      {quals ? <p>
        <li>Bachelor Degree in Applied Science (Physics) from RMIT </li>
        <li>Certificate of Completion in Software Engineering from General Assembly (420 hours)</li>
      </p> : null}
    </section>
  );
};

export default About;
