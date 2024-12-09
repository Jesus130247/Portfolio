import Header from './header/header'
import Dashboard from './dashboard/dashboard'
import { useState } from 'react'
import styles from './Portfolio.module.css'


export default function Portfolio({viewProjects,setViewProjects}) {
  const [slide, setSlide] = useState(0)
  const [navO, setNavO] = useState(0)
  const [projects, setProjects] = useState(
    
  [
      {
        name:'ChiroOceaniaHub', 
        image:'chiroSeminars', 
        site:'https://chiroseminarhub-australia.onrender.com/',
        description:`ChiroSeminars is a comprehensive platform designed to connect individuals through interactive seminars, fostering learning and growth 
        in diverse fields. The application provides dynamic features such as expert-led sessions, collaborative learning environments, and access to extensive 
        seminar resources. Built with a robust tech stack, including React.js, Node.js, PostgreSQL, and FullCalendar, it leverages modern tools like Google Pay,
        SendGrid, and framer-motion to enhance user experience. With a focus on innovation and usability, ChiroSeminars exemplifies cutting-edge development while 
        addressing the unique needs of seminar participants.` ,
        gitLink:'https://github.com/Jesus130247/ChiroSeminars',
        backgroundColor:'beige',
        directory: '0'
      },  
      {
          name: 'Prepare for Battle',
          image: 'p4b',
          site: 'https://prepare4battle.onrender.com',
          description: `A website designed for the complex table top game; warhammer 40k. This website allows users to quickly, and efficiently 'prepare for battle'.
          It is a one stop shop for all the Rules they could need, as well as intuative UI to allow them to easily construct their army for game day. This website ultizes
          React to easily structure components. I also had to create my own API from data.csv files I got from 'Wahapedia'.`,
          gitLink:'https://github.com/Jesus130247/warhammer_builder',
          backgroundColor:'#121212',
          directory: '1'
      },
      {
          name:'Petrol Down-Under',
          image:'PDU',
          site: 'https://melb-petrol-app.onrender.com',
          description:`A website that allows users to check the locations of every petrol station in Australia. It utilizes the google maps API, restricting the amount of 
          petrol stations that show to be only the ones on the users screen. This allows for faster performance. It also has features such as; searching by postcode, 
          searching for a specific location, and a random petrol station spotlight.`,
          gitLink:'https://github.com/Jesus130247/Melb-petrol-app',
          backgroundColor:'#faf0e6',
          directory: '2'
      },
      {
        name:'DeepNotes', 
        image:'DeepNotes', 
        site:'https://jesus130247.github.io/Electron-Transcription/',
        description:`An audio transcription and summarization tool for managing spoken content.
        Technologies: Electron, React, PostgreSQL, TypeScript, DeepGram, OpenAI
        Features: Transcribes audio input and provides concise summaries. Available as a desktop app or web application.`,
        gitLink:'https://github.com/Jesus130247/Electron-Transcription',
        backgroundColor:'#0c33b688',
        directory: '3'
      },
      {
        name:'Ultimate Task Manager', 
        image:'UTM', 
        site:'https://task-manager-app-lapis.onrender.com/',
        description:`The Ultimate Task Manager is an app designed to help users efficiently manage their tasks and stay productive. 
        It offers a simple, intuitive interface to organize tasks and track their progress with ease.`,
        gitLink:'https://github.com/Jesus130247/Task-Manager-App-Lapis',
        backgroundColor:'beige',
        directory: '4'
      },
      {
          name:'Leddit',
          image:'leddit',
          description:`Leo's take on the popular site, reddit. Designed to allow users to share and talk about any subject they're interested. Once logged in,
          users can search for (or create) servers, post, comment, upvote and share with the community. This site was built with NodeJs, PSQL, HTML and JavaScript.`,
          gitLink:'https://github.com/Jesus130247/Project2-CRUD/blob/main/views/layout.ejs',
          backgroundColor:'#d4d4d4',
          directory: '5'
      },
      {
          name:'Tic Tac Terminator', 
          image:'tic', 
          site:'https://pages.git.generalassemb.ly/leo-git-ga/Project-1/',
          description:'This is a fun game of knots and crosses. It allows a user to play against their friend... or take on the terminator bot. This was project was created with JavaScript, and styles with CSS. The simplicity of the disign was intended to match the the game, to give the user a relaxed feeling.',
          gitLink:'https://git.generalassemb.ly/leo-git-ga/Project-1',
          backgroundColor:'lightblue',
          directory: '6'
      },
      {
          name:'Calculator', 
          image:'calc', 
          site:'https://jesus130247.github.io/calc_backup/',
          description:'This is the first app that I created. It is a simple calculator put together with HTML and JavaScript, and then styled with CSS' ,
          gitLink:'https://github.com/Jesus130247/calc_backup',
          backgroundColor:'beige',
          directory: '7'
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
       <div className={styles.body}>
        <Header />
        <div className={styles.directions}>
          {projects.map((project,idx) => {
            if (idx === navO) {
              return (
                <span key={idx} onClick={() => handleNav(idx)}>O</span>
              )
            } else {
              return (
               <span style={{backgroundColor: 'transparent'}} key={idx} onClick={() => handleNav(idx)}>O</span>
              )
            }
          })}
        </div>
      <div className={styles.grid}>
        <div onClick={() => handleClick(-1)} className={styles.navigate}>&#8592;</div>
        <Dashboard slide={slide} projects={projects}/>
        <div onClick={() => handleClick(1)} className={styles.navigate}>&#8594;</div>
      </div>
    </div>
    </section>
  )
}
