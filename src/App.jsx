import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Profile from './components/Profile.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Strengths from './components/Strengths.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  )
}
