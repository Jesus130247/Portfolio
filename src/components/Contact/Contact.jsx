import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendMessage, setSendMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
    // Here you would typically send the data to a server
  };

  return (
    <section id="contact">
      <h2>Contacts</h2>
    <ul>
      <li><a target='_blank' HREF='https://www.linkedin.com/in/leonardo-manteit-8882a629a'>LinkedIn</a></li>
      <li><a target='_blank' HREF='https://www.instagram.com/leonardomonty/'>Instagram</a></li>
    </ul>
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
      </form> : null}
    </section>
  );
};

export default Contact;
