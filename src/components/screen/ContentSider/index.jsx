import { Image, Menu } from "antd"
import {
  UserOutlined,
  HighlightOutlined,
  EnvironmentOutlined,
  CustomerServiceOutlined,
  ProjectOutlined,
  IdcardOutlined,
} from "@ant-design/icons"
import styles from "./index.module.scss"
import imageProfile from "../../../assets/royal3.jpg"

export default function index() {
  const handleClick = (e) => {
    console.log(e)
  }
  return (
    <>
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
    </>
  )
}
