import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div id='image'>
        <img src="https://cdn.discordapp.com/attachments/706130030119354472/1263385653715009566/image.png?ex=669a0b14&is=6698b994&hm=16e9dfbe242ab75df5c240db720b2976f59269b83c54625a0ff71a1aab0ac11a&" alt="me" />
      </div>
      <div className='content'>
        <h1>Leonardo Manteit</h1>
        <p>Software Developer</p>
        <br />
        <button>Check out my Resume</button>
      </div>
    </section>
  );
};

export default Home;
