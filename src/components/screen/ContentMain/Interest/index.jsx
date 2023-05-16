import styles from "./index.module.scss"

export default function Interest(props) {
  return (
    <>
      <section ref={props.refInterest} className={styles.container}>
        Interest
      </section>
    </>
  )
}
