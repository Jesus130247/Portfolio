import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import locationImg from '../../assets/images/map.png'
import emailImg from '../../assets/images/gmail.png'
import linkedIn from '../../assets/images/linkedin.png'
import github from '../../assets/images/Github.png'
import NavUp from '../navUp/NavUp';

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

  return (<>
    <section id="contact">
      <NavUp location={'portfolio'} />
      <div className="contactDiv">
        <div className="sectionOne">
        <h2>Contact</h2>
        <p>If you'd like to work together or just want to say hello, feel free to contact me via my social media handles below. You can also email me using the form to the right.</p>
        <br /><p>I will always do my best to respond within the hour</p>
        <br />
      <p>
        <li><a target='_blank' href='https://www.google.com.au/maps/@-37.8602828,145.079616,10z'><img src={locationImg} alt="location pin" /> Melbourne, AUS</a></li>
        <li><a target='_blank' href='mailto:leonardo.monty@hotmail.com'><img src={emailImg} alt="email logo" /> Leonardo.monty@hotmail.com</a></li>
        <li><a target='_blank' href='https://www.linkedin.com/in/leonardo-manteit-8882a629a'><div /><img src={linkedIn} alt="linkedIn" /> LinkedIn/LeonardoManteit</a></li>
        <li><a target='_blank' href='https://github.com/Jesus130247'><div /><img src={github} alt="github" /> github/Jesus130247</a></li>
      </p>
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
      </div>
    </section>
          </>
  );
};

export default Contact;
