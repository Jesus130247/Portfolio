import Project from "../project/Project"
import styles from '../Portfolio.module.css'

export default function Dashboard({slide, projects}) {
    return (
        <div className={styles.dashboard}>
            <Project 
            name={projects[slide].name}
            image={projects[slide].image}
            site={projects[slide].site}
            description={projects[slide].description}
            gitLink={projects[slide].gitLink}
            backgroundColor={projects[slide].backgroundColor}
            directory={projects[slide].directory}
            />
        </div>
    )
}