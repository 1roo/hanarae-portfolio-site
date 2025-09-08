import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import AboutMePage from "./pages/AboutMePage"
import CareerPage from "./pages/CareerPage"
import MainPage from "./pages/MainPage"
import ProjectsPage from "./pages/ProjectsPage"
import SkillsPage from "./pages/SkillsPage"

function App() {
  return (
    <>
      <Header />
      <main>
        <MainPage />
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
