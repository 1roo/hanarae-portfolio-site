interface MainPageProps {
  mainRef: React.RefObject<HTMLElement | null>
}

export default function MainPage({ mainRef }: MainPageProps) {
  return (
    <section
      id="main"
      ref={mainRef}
      className="h-[50vh] flex flex-col gap-2 items-center justify-center bg-black"
    >
      <h1 className="text-4xl font-bold text-center text-white">하나래</h1>
      <h1 className="text-4xl font-bold text-center text-white">
        프론트엔드 개발자 포트폴리오
      </h1>
    </section>
  )
}
