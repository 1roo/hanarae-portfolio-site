import { IoImageOutline } from "react-icons/io5"
import { VscBook, VscGithubInverted } from "react-icons/vsc"
import ProjectCard from "../components/ProjectCard"

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-[#EEEEEE] p-16 text-lg"
    >
      <h2 className="text-3xl font-semibold">PROJECTS</h2>
      <div className="border border-black w-44" />
      <div className="mb-10 mt-1 border border-black h-2 w-44 bg-black" />

      <ProjectCard
        title="동네방네"
        roles={[
          { name: "기획", color: "bg-[#C2A500]/60 text-black" },
          { name: "프론트", color: "bg-[#17BBD8]/60 text-white" }
        ]}
        period="2024.03.26 ~ 2024.05.07 (총6주)"
        teamInfo="FE 2인 / BE 4인"
        description="주민들이 직접 우리 동네의 숨은 명소를 공유하고 소통하며 동네를 꾸며가는 지역 커뮤니티 서비스"
        techStack="React, TypeScript, Vite, Tanstack Query, Styled-components, JWT, WebSocket, SSE"
        highlights={[
          "지도 기반 명소 등록 및 탐색 기능",
          "실시간 채팅 기능 (WebSocket)",
          "JWT 기반 회원 인증 및 권한 관리"
        ]}
        links={[
          {
            icon: <VscBook className="text-2xl" />,
            label: "README.md",
            href: "https://github.com/your-repo/readme"
          },
          {
            icon: <VscGithubInverted className="text-2xl" />,
            label: "REPOSITORY",
            href: "https://github.com/your-repo"
          },
          {
            icon: <IoImageOutline className="text-2xl" />,
            label: "IMAGES",
            href: "https://your-site.com/images"
          }
        ]}
      />

      <ProjectCard
        title="오동 (오늘도운동)"
        roles={[{ name: "프론트", color: "bg-[#61DAFB] text-white" }]}
        period="2025.01 ~ 2025.02 (1개월)"
        teamInfo="개인 프로젝트"
        description="운동 기록 및 시각화를 지원하는 풀스택 헬스케어 웹앱"
        techStack="React, TypeScript, Spring Boot, MySQL, Tailwind CSS"
        highlights={[
          "BMI 및 인바디 기록 관리",
          "운동 루틴 추천 및 차트 시각화",
          "YouTube API 연동을 통한 운동 영상 검색"
        ]}
        links={[
          {
            icon: <VscGithubInverted className="text-2xl" />,
            label: "GitHub",
            href: "https://github.com/your-repo"
          }
        ]}
      />
    </section>
  )
}
