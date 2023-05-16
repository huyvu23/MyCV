import styles from "./index.module.scss"

export default function Experience(props) {
  return (
    <>
      <div ref={props.refExperience} className={styles.container}>
        Experience
      </div>
    </>
  )
}
