import styles from "./index.module.scss"
import Fade from "react-reveal/Fade"

export default function Education(props) {
  return (
    <>
      <section ref={props.refEducation} className={styles.container}>
        <Fade bottom>
          <div>
            <h2>Education</h2>
          </div>
        </Fade>
      </section>
    </>
  )
}
