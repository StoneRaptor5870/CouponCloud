import Scene from '@couponcloud/3d/src/Scene'

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="w-full h-full -mt-48">
        <Scene />
      </div>
    </main>
  )
}
