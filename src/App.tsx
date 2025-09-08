import Header from "./components/layout/Header"
import MainPage from "./pages/MainPage"
import AboutMePage from "./pages/AboutMePage"
import SkillsPage from "./pages/SkillsPage"
import ProjectsPage from "./pages/ProjectsPage"
import CareerPage from "./pages/CareerPage"
import Footer from "./components/layout/Footer"
import { useRef } from "react"

function App() {
  const mainRef = useRef<HTMLElement | null>(null)

  return (
    <>
      <Header mainRef={mainRef} />
      <main>
        <MainPage mainRef={mainRef} />
        <AboutMePage />
        <SkillsPage />
        <ProjectsPage />
        <CareerPage />
      </main>
      <Footer />
    </>
  )
}

export default App
