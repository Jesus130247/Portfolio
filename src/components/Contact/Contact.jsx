import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendMessage, setSendMessage] = useState(false)
  const [status, setStatus] = useState(null)
  let secrets = import.meta.env
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message ${message}, sent by ${name}`);
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
  };

  return (
    <section id="contact">
      <div className="sectionOne">
      <p>
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
      </p>
      </div>
      <div className="sectionTwo">
      <h2>Contacts</h2>
      <h3>Feel free to reach out on my socials</h3>
    <ul>
      <li><a target='_blank' href='https://www.linkedin.com/in/leonardo-manteit-8882a629a'>LinkedIn</a></li>
      <li><a target='_blank' href='https://www.instagram.com/leonardomonty/'>Instagram</a></li>
    </ul>
      <h3>Or if youd prefer, send me an email below.</h3>
      <button onClick={() => setSendMessage(!sendMessage)}>DM me now</button>
      {sendMessage ? 
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
      : <div>{status ? <div>{status}</div> : null}</div>}
      <h3>I will do my best to always respond within the hour</h3>
      </div>
    </section>
  );
};

export default Contact;
