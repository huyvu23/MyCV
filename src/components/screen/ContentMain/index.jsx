import About from "./About"
import Experience from "./Experience"
import Education from "./Education"
import Skill from "./Skill"
import Project from "./Project"
import Interest from "./Interest"

export default function index(props) {
  const { refAbout, refExperience, refEducation, refSkill, refProject, refInterest } = props
  return (
    <>
      <section style={{ marginLeft: "200px" }}>
        <About refAbout={refAbout} />
        <Experience refExperience={refExperience} />
        <Education refEducation={refEducation} />
        <Skill refSkill={refSkill} />
        <Project refProject={refProject} />
        <Interest refInterest={refInterest} />
      </section>
    </>
  )
}
