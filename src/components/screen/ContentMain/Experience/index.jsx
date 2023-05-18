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
              <h3 style={{ color: "#00a78e" }}>VNSOLUTION</h3>
              <div>
                <strong>Front-end Developer</strong>
                <span style={{ marginLeft: "10px" }}>(4/2022 - PRESENT)</span>
              </div>
              <div>
                <h4>NGHI SON PMS</h4>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}
