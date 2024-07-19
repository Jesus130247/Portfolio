import React from 'react';
// import portfolio from '../../assets/portfolio.pdf'
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
        <button><a target='_blank' href='https://www.canva.com/design/DAGLLY4iX2U/z0bplVE7eX9rF8epgkzQFA/view?utm_content=DAGLLY4iX2U&utm_campaign=designshare&utm_medium=link&utm_source=editor'>Check out my Resume</a></button>
      </div>
    </section>
  );
};

export default Home;
