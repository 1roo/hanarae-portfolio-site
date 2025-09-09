import type { ReactNode } from "react"

interface ProjectRole {
  name: string
  color: string
}

interface ProjectLink {
  icon: ReactNode
  label: string
  href?: string
  onClick?: () => void
}

interface ProjectCardProps {
  title: string
  roles: ProjectRole[]
  period: string
  teamInfo: string
  description: string
  techStack: string
  highlights?: string[]
  links?: ProjectLink[]
}

export default function ProjectCard({
  title,
  roles,
  period,
  teamInfo,
  description,
  techStack,
  highlights = [],
  links = []
}: ProjectCardProps) {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-10 w-4/5 mb-10">
      <div className="flex items-start justify-between pb-4 border-b border-b-black">
        <div className="flex">
          <span className="inline-block bg-[#237031]/60 text-white rounded-lg px-2 pt-2 font-bold text-2xl">
            {title}
          </span>
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              {roles.map((role, i) => (
                <span
                  key={i}
                  className={`inline-block text-sm rounded-md px-2 py-0.5 ml-2 ${role.color}`}
                >
                  {role.name}
                </span>
              ))}
            </div>
            <span className="inline-block text-xs mt-2 ml-2">{period}</span>
          </div>
        </div>
        <span className="self-end text-sm">{teamInfo}</span>
      </div>

      <p className="my-4 font-bold">{description}</p>

      <ul className="list-disc list-inside space-y-1">
        {highlights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="border border-[#447346] bg-[#BFFDCA]/45 rounded-lg p-4 my-4">
        <span>{techStack}</span>
      </div>

      {links.length > 0 && (
        <div className="flex gap-4 mt-4 flex-wrap">
          {links.map((link, i) =>
            link.onClick ? (
              <button
                key={i}
                onClick={link.onClick}
                className="flex items-center border border-black rounded-lg px-3 py-2 font-bold cursor-pointer hover:bg-gray-100"
              >
                {link.icon}
                <span className="ml-2 can-select">{link.label}</span>
              </button>
            ) : (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-black rounded-lg px-3 py-2 font-bold cursor-pointer hover:bg-gray-100"
              >
                {link.icon}
                <span className="ml-2 can-select">{link.label}</span>
              </a>
            )
          )}
        </div>
      )}
    </div>
  )
}
