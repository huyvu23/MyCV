import styles from "./index.module.scss"
import Fade from "react-reveal/Fade"
import { PushpinFilled } from "@ant-design/icons"

export default function Experience(props) {
  return (
    <>
      <section ref={props.refExperience} className={styles.container}>
        <Fade bottom>
          <div className={styles.wrap}>
            <h2>CAREER OBJECTIVE</h2>
            <div>
              <ul>
                <li>
                  <PushpinFilled className={styles.styleForIcon} />
                  Find a suitable working environment to sharpen existing skills and gain more
                  experience
                </li>
                <li>
                  <PushpinFilled className={styles.styleForIcon} />
                  Eager to learn new technologies
                </li>
                <li>
                  <PushpinFilled className={styles.styleForIcon} />
                  Develop into a programmer FullStack
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}
