import { useState } from 'react'
import styles from '../Portfolio.module.css'
import warhammer from '../../../assets/images/p4b1.png'
import calc from '../../../assets/images/calc.png'
import tic from '../../../assets/images/ticTacToe.png'
import leddit from '../../../assets/images/leddit.png'
import PDU from '../../../assets/images/PDU.png'

export default function Project({name, image, description, site, backgroundColor, gitLink}) {
    const [show, setShow] = useState(false)
    const lib = {
        'p4b': warhammer,
        'calc': calc,
        'tic': tic,
        'leddit': leddit,
        'PDU': PDU
    }
    return (
    <>
        <div 
        className={show ? `${styles.projects} ${styles.showDescription}`: styles.projects } style={{backgroundImage: `url('${lib[image]}')`, backgroundColor: backgroundColor}} 
        onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
        >
            <p className={styles.projectDes}>{name}<br />
            <small>{description}</small>{site ? <a target='_blank' className={styles.site} href={site}>Visit Site</a> : null}
            <small>{description}</small>{gitLink ? <a target='_blank' className={styles.gitLink} href={gitLink}>Visit GitHub</a> : null}</p>
        </div>
    </>
    )
}