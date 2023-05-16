import styles from "./App.module.scss"
import { Layout, Menu, Image } from "antd"
import {
  UserOutlined,
  HighlightOutlined,
  EnvironmentOutlined,
  CustomerServiceOutlined,
  ProjectOutlined,
  IdcardOutlined,
} from "@ant-design/icons"
import ContentMain from "./components/screen/ContentMain"
import imageProfile from "../src/assets/royal3.jpg"
import { useRef } from "react"
const { Sider, Content } = Layout

function App() {
  const refAbout = useRef(null)
  const refExperience = useRef(null)
  const refEducation = useRef(null)
  const refSkill = useRef(null)
  const refProject = useRef(null)
  const refInterest = useRef(null)

  const handleClick = (e) => {
    switch (parseInt(e.key)) {
      case 1:
        handleScroll(refAbout)
        break
      case 2:
        handleScroll(refExperience)
        break
      case 3:
        handleScroll(refEducation)
        break
      case 4:
        handleScroll(refSkill)
        break
      case 5:
        handleScroll(refProject)
        break
      case 6:
        handleScroll(refInterest)
        break
      default:
      // code block
    }
  }

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Layout hasSider>
        <Sider className={styles.siderStyle}>
          <section className={styles.container}>
            <Image
              className={styles.imageProfile}
              width={150}
              src={imageProfile}
              alt="error"
              preview={false}
            />
            <div className={styles.wrapMenu}>
              <Menu
                onClick={handleClick}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: "1",
                    icon: <IdcardOutlined />,
                    label: "About",
                  },
                  {
                    key: "2",
                    icon: <HighlightOutlined />,
                    label: "Experience",
                  },
                  {
                    key: "3",
                    icon: <EnvironmentOutlined />,
                    label: "Education",
                  },
                  {
                    key: "4",
                    icon: <UserOutlined />,
                    label: "Skill",
                  },
                  {
                    key: "5",
                    icon: <ProjectOutlined />,
                    label: "Project",
                  },
                  {
                    key: "6",
                    icon: <CustomerServiceOutlined />,
                    label: "Interest",
                  },
                ]}
              />
            </div>
          </section>
        </Sider>
        <Layout className="site-layout">
          <Content>
            <ContentMain
              refAbout={refAbout}
              refExperience={refExperience}
              refEducation={refEducation}
              refSkill={refSkill}
              refProject={refProject}
              refInterest={refInterest}
            />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
