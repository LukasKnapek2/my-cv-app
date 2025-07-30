
import GeneralInfo from './components/GeneralInfo'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import CVSection from './components/SectionWrapper'


import './styles/App.module.css'

function App() {

  return (
    <div className="cv-container">
      <h1>My CV</h1>
      <GeneralInfo />
      <EducationSection />
      <ExperienceSection />
      </div>
  )
}

export default App
