import About from "./About"
import Experience from "./Experience"

export default function index(props) {
  const { refAbout, refExperience } = props
  return (
    <>
      <section style={{ marginLeft: "200px" }}>
        <About refAbout={refAbout} />
        <Experience refExperience={refExperience} />
      </section>
    </>
  )
}
