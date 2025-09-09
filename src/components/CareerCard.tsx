interface CareerCardProps {
  logo: string
  company: string
  period: string
  description: string
  techStack: string[]
  tasks: string[]
}

export default function CareerCard({
  logo,
  company,
  period,
  description,
  techStack,
  tasks
}: CareerCardProps) {
  return (
    <div className="flex justify-center items-center my-12">
      {/* 회사 로고 */}
      <img src={logo} alt={`${company} 로고`} width={200} height={200} />

      {/* 세로 구분선 */}
      <div className="bg-gray-400 w-[2px] h-80 mx-10" />

      {/* 회사 상세 */}
      <div className="flex flex-col items-start gap-2">
        <h3 className="font-bold text-white">{company}</h3>
        <p className="text-sm text-[#9C9C9C]">{period}</p>
        <p className="text-sm text-[#9C9C9C]">{description}</p>

        {/* 기술 스택 */}
        <div className="flex gap-2 my-4 flex-wrap">
          {techStack.map((stack, idx) => (
            <span
              key={idx}
              className="inline-block px-2 py-1 bg-[#FFFFFF]/80 rounded-md text-base font-semibold"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* 주요 업무 */}
        <ul className="list-disc list-inside text-base text-[#9C9C9C] space-y-1">
          {tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
