import { useState } from 'react'
import styles from '../Portfolio.module.css'

export default function Project({name, image, description, site, backgroundColor}) {
    const [show, setShow] = useState(false)
    return (
    <>
        <div 
        className={show ? `${styles.projects} ${styles.showDescription}`: styles.projects } style={{backgroundImage: `url('${image}')`, backgroundColor: backgroundColor}} 
        onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
        >
            <p className={styles.projectDes}>{name}<br />
            <small>{description}</small>{site ? <a target='_blank' className={styles.site} HREF={site}>Visit Site</a> : null}</p>
        </div>
    </>
    )
}