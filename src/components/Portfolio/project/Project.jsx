import { useState } from 'react'
import styles from '../Portfolio.module.css'
import warhammer from '../../../assets/images/warhammer.png'
import calc from '../../../assets/images/calc.png'
import tic from '../../../assets/images/ticTacToe.png'
import leddit from '../../../assets/images/leddit.png'
import PDU from '../../../assets/images/PDU.png'
import DeepNotes from '../../../assets/images/DeepNotes.jpeg'
import UTM from '../../../assets/images/UTM.jpg'
import chiroSeminars from '../../../assets/images/chiroSeminars.png'

export default function Project({name, image, description, site, backgroundColor, gitLink}) {
    const [show, setShow] = useState(false)
    const lib = {
        'chiroSeminars': chiroSeminars,
        'p4b': warhammer,
        'calc': calc,
        'tic': tic,
        'leddit': leddit,
        'PDU': PDU,
        'DeepNotes': DeepNotes,
        'UTM': UTM
    }
    return (
    <>
        <div 
        className={show ? `${styles.projects} ${styles.showDescription}`: styles.projects } style={{backgroundImage: `url('${lib[image]}')`, backgroundColor: backgroundColor}} 
        onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
        >
            <p className={styles.projectDes}>{name}<br />
            <small>{description}</small>{site ? <a target='_blank' className={styles.site} href={site}>Visit Site</a> : null}{gitLink ? <a target='_blank' className={styles.gitLink} href={gitLink}>Visit GitHub</a> : null}</p>
        </div>
    </>
    )
}