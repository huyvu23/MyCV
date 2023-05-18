import styles from "./index.module.scss"
import { IdcardOutlined, AimOutlined, CheckCircleOutlined } from "@ant-design/icons"
import QRCode from "react-qr-code"
import Fade from "react-reveal/Fade"

export default function About(props) {
  return (
    <>
      <section ref={props?.refAbout} className={styles.container}>
        <Fade bottom>
          <div className={styles.wrapIntro}>
            <h3 className={styles.intro}>Hello I'm</h3>
            <h1 className={styles.wrapFullName}>
              VŨ QUANG <span className={styles.name}>HUY</span>
            </h1>
            <div>
              <h2>
                <IdcardOutlined className={styles.myCard} /> FRONT - END DEVELOPER(MOBILE AND WEB)
              </h2>
              <h2>
                <AimOutlined className={styles.myCard} /> I LIVE IN THE COUNTRY THANH XUAN,HA NOI
              </h2>
              <p className={styles.textAnimation}>Welcome to visit my CV online!</p>
              {/* ============== */}
              <p className={styles.textSkill}>
                <CheckCircleOutlined />
                <strong>Front-end :</strong> I am experienced in{" "}
                <strong>
                  Javascript on ReactJS Framework,React Native using Redux, Axios, Taildwind...
                </strong>
              </p>
              {/* ================= */}
              <p className={styles.textSkill}>
                <CheckCircleOutlined />
                <strong>Back-end :</strong> I am experienced in <strong> Java , Mysql...</strong>
              </p>
            </div>

            {/* ================= */}
            <div>
              <div style={{ background: "white", padding: "16px" }}>
                <h3>CONTACT</h3>
                <QRCode
                  size={180}
                  value="https://www.facebook.com/profile.php?id=100029118017913"
                />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}
