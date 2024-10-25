import React from 'react';
import me from '../../assets/images/me.png'
import resume from '../../assets/Leonardo_Manteit.pdf'
import downloadSymbol from '../../assets/images/download.png'
import preview from '../../assets/images/search-file.png'
// import portfolio from '../../assets/portfolio.pdf'
const Home = () => {
  return (
    <section id="home">
      <div className="homeDiv">
        <div id='image'>
          {/* <img src="https://cdn.discordapp.com/attachments/706130030119354472/1263385653715009566/image.png?ex=669a0b14&is=6698b994&hm=16e9dfbe242ab75df5c240db720b2976f59269b83c54625a0ff71a1aab0ac11a&" alt="me" /> */}
          <img className='my_img' src={me} alt="me" />
        </div>
        <div className='content'>
          <p>Hi, I'm</p>
          <h1>Leonardo Manteit</h1>
          <p>Software Engineer</p>
          <img src={preview} className='buttonImages'/>
          <button><a target='_blank' href='https://www.canva.com/design/DAGUb3-MIPg/CledkuW39sj-8ZWgAd8W3A/view?utm_content=DAGUb3-MIPg&utm_campaign=designshare&utm_medium=link&utm_source=editor'>Preview my Resume</a></button>
          <br />
          <img src={downloadSymbol} className='buttonImages'/>&nbsp;
          <a href={resume} download><button style={{backgroundColor: '#ff4141', color:'white'}}> Download Resume</button></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
