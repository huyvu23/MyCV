import styles from "./index.module.scss"
import Fade from "react-reveal/Fade"

export default function Interest(props) {
  return (
    <>
      <section ref={props.refInterest} className={styles.container}>
        <Fade bottom>
          <div className={styles.wrap}>
            <h2>Interest</h2>
            <div>
              <p>
                I like code and always want learn learn more . Besides, I also spend my free time
                listening to music, playing soccer and practicing calisthenic
              </p>
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}
