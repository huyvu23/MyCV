import styles from "./index.module.scss"
import Fade from "react-reveal/Fade"

export default function Experience(props) {
  return (
    <>
      <section ref={props.refExperience} className={styles.container}>
        <Fade bottom>
          <div className={styles.wrap}>
            <h2>Experience</h2>
            <div>
              <h3>VNSOLUTION</h3>
              <h4>Front-end Developer</h4>
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}
