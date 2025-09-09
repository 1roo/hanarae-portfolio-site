import Header from "./components/layout/Header"
import MainPage from "./pages/MainPage"
import AboutMePage from "./pages/AboutMePage"
import SkillsPage from "./pages/SkillsPage"
import ArchivePage from "./pages/ArchivePage"
import ProjectsPage from "./pages/ProjectsPage"
import CareerPage from "./pages/CareerPage"
import Footer from "./components/layout/Footer"
import ScrollToTopButton from "./components/ScrollToTopButton"
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
        <ArchivePage />
        <ProjectsPage />
        <CareerPage />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
