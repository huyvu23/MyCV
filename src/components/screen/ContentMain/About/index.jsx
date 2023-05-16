import styles from "./index.module.scss"

export default function About(props) {
  return (
    <>
      <section ref={props?.refAbout} className={styles.container}>
        About
      </section>
    </>
  )
}
