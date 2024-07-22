import Header from './header/header'
import Dashboard from './dashboard/dashboard'
import { useState } from 'react'
import styles from './Portfolio.module.css'
import NavUp from '../navUp/NavUp'
import NavDown from '../navDown/NavDown'


export default function Portfolio({viewProjects,setViewProjects}) {
  const [slide, setSlide] = useState(0)
  const [navO, setNavO] = useState(0)
  const [projects, setProjects] = useState(
    
  [
      {
          name: 'Prepare for Battle',
          image: '/Portfolio/assets/warhammer-t5phR8e3.png',
          site: 'https://prepare4battle.onrender.com',
          description: `A website designed for the complex table top game; warhammer 40k. This website allows users to quickly, and efficiently 'prepare for battle'.
          It is a one stop shop for all the Rules they could need, as well as intuative UI to allow them to easily construct their army for game day. This website ultizes
          React to easily structure components. I also had to create my own API from data.csv files I got from 'Wahapedia'.`,
          gitLink:'https://github.com/Jesus130247/warhammer_builder',
          backgroundColor:'#3c3c3c',
          directory: '0'
      },
      // {
      //     name:'Petrol station Map',
      //     image:'',
      //     description:`A website that allows users to check the locations of every petrol station in Australia. It utilizes the google maps API, restricting the amount of 
      //     petrol stations that show to be only the ones on the users screen. This allows for faster performance. It also has features such as; searching by postcode, 
      //     searching for a specific location, and a random petrol station spotlight. This website could be best used by people roadtripping around australia, and wanting to 
      //     make sure they wont be left without petrol in the middle of the outback.`,
      //     gitLink:'https://github.com/Jesus130247/Melb-petrol-app',
      //     backgroundColor:'black'
      // },
      {
          name:'Leddit',
          image:'/Portfolio/assets/leddit-Cdljzu7.png',
          description:`Leo's take on the popular site, reddit. Designed to allow users to share and talk about any subject they're interested. Once logged in,
          users can search for (or create) servers, post, comment, upvote and share with the community. This site was built with NodeJs, PSQL, HTML and JavaScript.`,
          gitLink:'https://git.generalassemb.ly/leo-git-ga/project-2',
          backgroundColor:'#d4d4d4',
          directory: '1'
      },
      {
          name:'Tic Tac Terminator', 
          image:'/Portfolio/assets/ticTacToe-CkRANuQ1.png', 
          site:'https://pages.git.generalassemb.ly/leo-git-ga/Project-1/',
          description:'This is a fun game of knots and crosses. It allows a user to play against their friend... or take on the terminator bot. This was project was created with JavaScript, and styles with CSS. The simplicity of the disign was intended to match the the game, to give the user a relaxed feeling.',
          gitLink:'https://git.generalassemb.ly/leo-git-ga/Project-1',
          backgroundColor:'lightblue',
          directory: '2'
      },
      {
          name:'Calculator', 
          image:'/Portfolio/assets/calc-DAvLp7Th.png', 
          site:'https://jesus130247.github.io/calc_backup/',
          description:'This is the first app that I created. It is a simple calculator put together with HTML and JavaScript, and then styled with CSS' ,
          gitLink:'https://github.com/Jesus130247/calc_backup',
          backgroundColor:'beige',
          directory: '3'
      }
  ])

  function handleClick(num) {
    let slideNum = slide + num
    if (slideNum > projects.length - 1) {
      slideNum = 0
    } else if (slideNum < 0) {
      slideNum = (projects.length - 1)
    }
    setSlide(slideNum)
    setNavO(slideNum)
  }
  function handleNav(idx) {
    setSlide(idx)
    setNavO(idx)
  }
  return (
    <section id='portfolio'>
      <NavUp location={'about'} />
    <div className={styles.grid}>
      <div onClick={() => handleClick(-1)} className={styles.navigate}>{'<'}</div>
      <div className={styles.body}>
        <Header />
        <div className={styles.directions}>
          {projects.map((project,idx) => {
            if (idx === navO) {
              return (
                <><span style={{backgroundColor: 'white'}} key={idx} onClick={() => handleNav(idx)}>O</span><span> </span></>
              )
            }
            return (
              <><span key={idx} onClick={() => handleNav(idx)}>O</span><span> </span></>
            )
          })}
        </div>
        <Dashboard slide={slide} projects={projects}/>
      </div>
      <div onClick={() => handleClick(1)} className={styles.navigate}>{'>'}</div>
    </div>
      <NavDown location={'contact'} />
    </section>
  )
}
