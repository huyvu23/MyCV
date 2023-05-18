import styles from "./App.module.scss"
import { Layout, Menu, Image, Drawer, Space, Button } from "antd"
import {
  UserOutlined,
  HighlightOutlined,
  EnvironmentOutlined,
  CustomerServiceOutlined,
  ProjectOutlined,
  IdcardOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons"
import ContentMain from "./components/screen/ContentMain"
import imageProfile from "../src/assets/royal3.jpg"
import { useRef, useState } from "react"

const { Header, Sider, Content } = Layout

function App() {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState("left")
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
    onClose()
  }

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  //! breakpoint của sider khi màn hình nhỏ hơn giá trị đó sider antd sẽ thu gọn lại

  return (
    <>
      <Header className={styles.headerStyle}>
        <MenuOutlined className={styles.menuIcon} onClick={showDrawer} />
      </Header>
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
      <Drawer
        title="VŨ QUANG HUY"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        extra={
          <Space>
            <Button onClick={onClose}>
              <CloseOutlined />
            </Button>
          </Space>
        }
      >
        <div className={styles.wrapMenu}>
          <Menu
            onClick={handleClick}
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
      </Drawer>
    </>
  )
}

export default App
