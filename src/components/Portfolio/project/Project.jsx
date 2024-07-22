import { useState } from 'react'
import styles from '../Portfolio.module.css'
import warhammer from '../../../assets/images/warhammer.png'
import calc from '../../../assets/images/calc.png'
import tic from '../../../assets/images/ticTacToe.png'
import leddit from '../../../assets/images/leddit.png'

export default function Project({name, image, description, site, backgroundColor}) {
    const [show, setShow] = useState(false)
    console.log(leddit)
    console.log(image)
    return (
    <>
        <div 
        className={show ? `${styles.projects} ${styles.showDescription}`: styles.projects } style={{backgroundImage: `url('${image}')`, backgroundColor: backgroundColor}} 
        onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
        >
            <p className={styles.projectDes}>{name}<br />
            <small>{description}</small>{site ? <a target='_blank' className={styles.site} href={site}>Visit Site</a> : null}</p>
        </div>
    </>
    )
}