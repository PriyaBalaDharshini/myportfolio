import About from './components/about/About'
import Intro from './components/intro/Intro'
import Skills from './components/skills/Skills'
import ProjectList from './components/projectList/ProjectList'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode ? "black" : "white", color: darkMode && "white" }}>
      <Toggle />
      <Intro />
      <About />
      <Skills />
      <ProjectList />
      <Contact />

    </div>
  )
}

export default App