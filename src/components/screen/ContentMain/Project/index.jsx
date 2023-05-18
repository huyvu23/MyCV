import styles from "./index.module.scss"
import Fade from "react-reveal/Fade"
import { FireFilled } from "@ant-design/icons"

export default function Project(props) {
  return (
    <>
      <section ref={props.refProject} className={styles.container}>
        <Fade bottom>
          <div className={styles.wrap}>
            <h2>PROJECT</h2>
            <section>
              <h3 style={{ textTransform: "uppercase" }}>
                Production management application of concreate Nghi Son
              </h3>
              <ul>
                <li>
                  <FireFilled className={styles.colorIconFire} />
                  <strong>Description:</strong>
                  <span> Manage production, and warehouse processes</span>
                </li>
                <li>
                  <FireFilled className={styles.colorIconFire} />
                  <strong>Responsibility:</strong>
                  <span>
                    Develop some core modules, Project maintenance, support other team members ,Add
                    interface features according to customer opinions
                  </span>
                </li>
                <li>
                  <FireFilled className={styles.colorIconFire} />
                  <strong>Position:</strong>
                  <span> Frontend-developer</span>
                </li>
                <li>
                  <FireFilled className={styles.colorIconFire} />
                  <strong>Technologies used:</strong>
                  <span> React JS , HTML , CSS , Redux ,JavaScript</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 style={{ textTransform: "uppercase" }}>Vinh Gia App Mobile</h3>
              <ul>
                <li>
                  <FireFilled className={styles.colorIconFire} />
                  <strong>Description:</strong>
                  <span> Manage production</span>
                </li>
                <li>
                  <FireFilled className={styles.colorIconFire} />
                  <strong>Responsibility:</strong>
                  <span>
                    Develop some core modules, Project maintenance, support other team members ,Add
                    interface features according to customer opinions
                  </span>
                </li>
                <li>
                  <FireFilled className={styles.colorIconFire} />
                  <strong>Position:</strong>
                  <span> Frontend-developer</span>
                </li>
                <li>
                  <FireFilled className={styles.colorIconFire} />
                  <strong>Technologies used:</strong>
                  <span> React Native</span>
                </li>
              </ul>
            </section>
          </div>
        </Fade>
      </section>
    </>
  )
}
