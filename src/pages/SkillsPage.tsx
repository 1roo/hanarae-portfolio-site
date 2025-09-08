export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-[#237031]/60 p-16 text-lg"
    >
      <h2 className="text-3xl font-semibold text-gray-100">SKILLS</h2>
      <div className="border border-gray-100 w-44" />
      <div className="mb-10 mt-1 border border-gray-100 w-44 h-2 bg-gray-100" />
      <div className="bg-[#EEEEEE]/80 rounded-lg py-10 shadow-lg px-10">
        <div className="flex items-center">
          <img
            src="/assets/images/language.png"
            alt="프로그램언어 이미지"
            width={70}
          />
          <span className="inline-block w-[100px] font-bold ml-4 mr-10">
            LANGUAGE
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-[#2F74C0] px-3 py-1 rounded-md text-white">
              TypeScript
            </span>
            <span className="inline-block bg-[#EFD81D] px-3 py-1 rounded-md text-black mx-4">
              JavaScript
            </span>
            <span className="inline-block bg-[#D13D35] px-3 py-1 rounded-md text-white">
              Java
            </span>
          </div>
        </div>
        <div className="flex items-center my-8">
          <img
            src="/assets/images/frontend.png"
            alt="프론트엔드 이미지"
            width={70}
          />
          <span className="inline-block w-[100px] font-bold ml-4 mr-10">
            FRONTEND
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-[#61DAFB] px-3 py-1 rounded-md text-white">
              React
            </span>
            <span className="inline-block bg-[#000000] px-3 py-1 rounded-md text-white mx-4">
              Next.js
            </span>
            <span className="inline-block bg-[#49443E] px-3 py-1 rounded-md text-white">
              Zustand
            </span>
            <span className="inline-block bg-[#FF4260] px-3 py-1 rounded-md text-white mx-4">
              React-Query
            </span>
            <span className="inline-block bg-[#000000] px-3 py-1 rounded-md text-white">
              React-Hook-Form
            </span>
            <span className="inline-block bg-[#CE6B9C] px-3 py-1 rounded-md text-white mx-4">
              SCSS
            </span>
            <span className="inline-block bg-[#38BDF8] px-3 py-1 rounded-md text-white">
              Tailwind CSS
            </span>
            <span className="inline-block bg-[#8869EE] px-3 py-1 rounded-md text-white ml-4">
              Vite
            </span>
          </div>
        </div>
        <div className="flex items-center mb-8">
          <img
            src="/assets/images/backend.png"
            alt="백엔드 이미지"
            width={70}
          />
          <span className="inline-block w-[100px] font-bold ml-4 mr-10">
            BACKEND
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-[#6DB33F] px-3 py-1 rounded-md text-white">
              Spring (Boot)
            </span>
            <span className="inline-block bg-[#339933] px-3 py-1 rounded-md text-white mx-4">
              Node.js
            </span>
            <span className="inline-block bg-[#000000] px-3 py-1 rounded-md text-white">
              Express.js
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <img src="/assets/images/devops.png" alt="devops 이미지" width={70} />
          <span className="inline-block w-[100px] font-bold ml-4 mr-10">
            DEVOPS
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-[#2468EE] px-3 py-1 rounded-md text-white">
              Docker
            </span>
            <span className="inline-block bg-[#F79B26] px-3 py-1 rounded-md text-white mx-4">
              AWS (EC2, S3)
            </span>
            <span className="inline-block bg-[#000000] px-3 py-1 rounded-md text-white">
              Vercel
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
