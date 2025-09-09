export default function ArchivePage() {
  return (
    <section
      id="archive"
      className="flex flex-col items-center justify-center bg-[#303030] p-16 text-lg"
    >
      <h2 className="text-3xl font-semibold text-gray-100">ARCHIVE</h2>
      <div className="border border-gray-100 w-44" />
      <div className="mb-10 mt-1 border border-gray-100 w-44 h-2 bg-gray-100" />

      <div className="flex gap-20 mt-10">
        {/* GitHub 카드 */}
        <a
          href="https://github.com/1roo"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-white p-3 w-[300px] cursor-pointer block hover:shadow-lg transition"
        >
          <img
            className="mb-5"
            src="/assets/images/github.png"
            alt="github 로고"
            width={150}
          />
          <span className="mr-3 font-bold">소스코드 저장소</span>
          <p className="text-blue-400">github.com/1roo</p>
        </a>

        {/* Notion 카드 */}
        <a
          href="https://www.notion.so/X-26536a87500d80d98fcfd449dd265b9f?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-white p-3 w-[300px] cursor-pointer block hover:shadow-lg transition"
        >
          <img
            className="mb-5"
            src="/assets/images/notion.png"
            alt="notion 로고"
            width={150}
          />
          <span className="mr-3 font-bold">공부 및 지식 기록 블로그</span>
        </a>
      </div>
    </section>
  )
}
