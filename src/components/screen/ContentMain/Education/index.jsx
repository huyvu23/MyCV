import styles from "./index.module.scss"
import Fade from "react-reveal/Fade"
import { BulbFilled, CheckCircleFilled } from "@ant-design/icons"

export default function Education(props) {
  return (
    <>
      <section ref={props.refEducation} className={styles.container}>
        <Fade bottom>
          <div className={styles.wrap}>
            <h2>Study and work</h2>
            <div>
              <ul>
                <li>
                  <CheckCircleFilled className={styles.iconCheck} />
                  One year experience in frontend developer position{" "}
                </li>
                <li>
                  <CheckCircleFilled className={styles.iconCheck} />
                  Thorough understanding of HTML, CSS, and JavaScript
                </li>
                <li>
                  <CheckCircleFilled className={styles.iconCheck} />
                  Having experience and proficiency in React JS and its score principles
                </li>
                <li>
                  <CheckCircleFilled className={styles.iconCheck} />
                  Good logical thinking, having progressive spirit and teamwork skills
                </li>
                <li>
                  <CheckCircleFilled className={styles.iconCheck} />
                  Good English reading
                </li>
              </ul>
              <div>
                <h3 className={styles.colorLocation}>VTI ACADEMY</h3>
                <span>
                  <BulbFilled className={styles.iconDescription} />
                  Learn FullStack Java Course
                </span>
              </div>
              <div>
                <h3 className={styles.colorLocation}>HANOI INDUSTRIAL VOCATIONAL COLLEEGE</h3>
                <span>
                  <BulbFilled className={styles.iconDescription} />
                  Learn Information Technology
                </span>
              </div>
              <div>
                <h3 className={styles.colorLocation}>VNSOLUTION COMPANY</h3>
                <span>
                  <BulbFilled className={styles.iconDescription} />
                  Work and grow
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}
