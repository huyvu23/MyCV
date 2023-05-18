import styles from "./index.module.scss"
import Fade from "react-reveal/Fade"
import { FaReact, FaJava } from "react-icons/fa"
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io"
import {
  SiJavascript,
  SiMysql,
  SiBabel,
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
} from "react-icons/si"
import { AiFillGithub, AiFillCheckCircle } from "react-icons/ai"

export default function Skill(props) {
  const listWork = [
    "Git, Github for Teamwork",
    "Testing & Debugging",
    "Responsive Web Design",
    "...",
  ]

  return (
    <>
      <section ref={props.refSkill} className={styles.container}>
        <Fade bottom>
          <div className={styles.wrap}>
            <h2>Skill</h2>
            <h3>PROGRAMMING LANGUAGES & TOOLS</h3>
            <ul>
              <li>
                <FaReact size={50} color="#62dafb" />
              </li>
              <li>
                <IoLogoHtml5 size={50} color="#e64c27" />
              </li>
              <li>
                <IoLogoCss3 size={50} color="#3d8fc6" />
              </li>
              <li>
                <SiTailwindcss size={50} />
              </li>
              <li>
                <SiBootstrap size={50} color="#593f7f" />
              </li>
              <li>
                <SiJavascript size={50} color="#efdc4f" />
              </li>
              <li>
                <SiBabel size={50} color="#fae269" />
              </li>
              <li>
                <SiMysql size={50} color="#00618a" />
              </li>
              <li>
                <FaJava size={50} />
              </li>
              <li>
                <SiSpringboot size={50} color="#4faa41" />
              </li>
              <li>
                <AiFillGithub size={50} />
              </li>
            </ul>

            <h3>WORKFLOW</h3>
            <div className={styles.listWorkFlow}>
              <ul>
                {listWork.map((item) => {
                  return (
                    <>
                      <li>
                        <AiFillCheckCircle />
                        <span>{item}</span>
                      </li>
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}
