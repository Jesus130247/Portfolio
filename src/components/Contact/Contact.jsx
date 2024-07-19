import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null)
  let secrets = import.meta.env
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name,
      email,
      message,
      to_name: 'JESUS'
    }
    emailjs.send(secrets.VITE_REACT_SERVICE_ID, secrets.VITE_REACT_YOUR_TEMPLATE_ID, templateParams, secrets.VITE_REACT_PUBLIC_KEY)
    .then((response) => {
      console.log('Message sent successfully!', response.status, response.text);
      setStatus('Message sent successfully!');
      // Clear the form
      setName('');
      setEmail('');
      setMessage('');
      setSendMessage(false);
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      setStatus('Failed to send message. Please try again later.');
    });
    alert(status);
  };

  return (
    <section id="contact">
      <div className="sectionOne">
      <h2>Contact</h2>
      <p>If you would like to work together, or just feel like saying hello, feel free to contact me on my socials below. Or DM using the form to the right.</p>
      <br /><p>I will do my best to always respond within the hour</p>
      <br />
    <ul>
      <li><a target='_blank' href='https://www.google.com.au/maps/@-37.8602828,145.079616,10z'>📍 Melbourne</a></li>
      <li><a target='_blank' href='mailto:leonardo.monty@hotmail.com'>✉️ Leonardo.monty@hotmail.com</a></li>
      <li><a target='_blank' href='https://www.linkedin.com/in/leonardo-manteit-8882a629a'><img href="/Portfolio/assets/social-linkedin.svg" alt="linked in logo" />LinkedIn/LeonardoManteit</a></li>
      <li><a target='_blank' href='https://github.com/Jesus130247'><img href="/Portfolio/assets/Github.svg" alt="github Logo" />github/Jesus130247</a></li>
    </ul>
      {/* <p>
        Are you ready to elevate your projects with cutting-edge 
        software solutions? 
      </p>
      <p><span style={{fontWeight: 700}}>What I offer:</span>
          <li>
          <span style={{fontWeight: 700}}>Custom Software Development:</span> Whether you need a web app, 
          mobile solution, or backend system, I create user-friendly and 
          scalable software tailored to your requirements.
          </li>
          <li>
          <span style={{fontWeight: 700}}>Full-Stack Expertise:</span> Proficient in both front-end and back-end technologies, 
          I ensure seamless integration and performance across all platforms.
          </li>
          <li>
          <span style={{fontWeight: 700}}>Agile Methodologies:</span> I employ agile practices to deliver high-quality solutions
          efficiently, adapting quickly to your changing needs.
          </li>
          <li>
          <span style={{fontWeight: 700}}>Collaboration and Support:</span> I prioritize open communication and collaboration, 
          working closely with your team to align on goals and deliver results.
          </li>
      </p> */}
      </div>
      <div className="sectionTwo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          ></textarea>
        <button type="submit">Send Message</button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
