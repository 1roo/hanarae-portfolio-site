import { IoImageOutline } from "react-icons/io5"
import { VscBook, VscGithubInverted } from "react-icons/vsc"

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-[#EEEEEE] p-16 text-lg"
    >
      <h2 className="text-3xl font-semibold">PROJECTS</h2>
      <div className="border border-black w-44" />
      <div className="mb-10 mt-1 border border-black w-44 h-2 bg-black" />
      <div className="bg-white shadow-2xl rounded-xl p-10 w-4/5">
        <div className="flex items-center justify-between pb-4 border-b border-b-black">
          <div className="flex">
            <span className="inline-block bg-[#237031]/60 text-white rounded-lg px-2 py-1 font-bold text-2xl">
              동네방네
            </span>
            <div className="flex flex-col">
              <div className="flex">
                <span className="inline-block bg-[#C2A500]/60 text-sm rounded-md px-1 ml-2 mr-1">
                  기획
                </span>
                <span className="inline-block bg-[#17BBD8]/60 text-sm rounded-md px-1">
                  프론트
                </span>
              </div>
              <span className="inline-block text-xs mt-2 ml-2">
                2024.03.26 ~ 2024.05.07 (총6주)
              </span>
            </div>
          </div>
          <span className="text-sm self-end">FE 2인 / BE 4인</span>
        </div>
        <p className="my-4 font-bold">
          주민들이 직접 우리 동네의 숨은 명소를 공유하고 소통하며 동네를
          꾸며가는 지역 커뮤니티 서비스
        </p>
        <li>소개소개</li>
        <li>소개소개</li>
        <li>소개소개</li>
        <div className="border border-[#447346] bg-[#BFFDCA]/45 rounded-lg p-4 my-4">
          <span>
            REACT, TypeScript, VITE, Tanstack-Query, Styled-component, JWT,
            WebSocket, SSE
          </span>
        </div>
        <div className="flex">
          <div>
            <div className="flex items-center border border-black rounded-lg px-2 py-1 mr-4 font-bold cursor-pointer">
              <VscBook className="text-2xl mr-1" />
              README.md
            </div>
          </div>
          <div>
            <div className="flex items-center border border-black rounded-lg px-2 py-1 mr-4 font-bold cursor-pointer">
              <VscGithubInverted className="text-2xl mr-1" />
              REPOSITORY
            </div>
          </div>
          <div>
            <div className="flex items-center border border-black rounded-lg px-2 py-1 mr-4 font-bold cursor-pointer">
              <IoImageOutline className="text-2xl mr-1" />
              IMAGES
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
