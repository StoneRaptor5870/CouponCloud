import Scene from '@couponcloud/3d/src/Scene'

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full p-4">
        <div className="col-span-4 flex justify-center items-center text-2xl font-bold">
          Heading Component
        </div>

        <div className="row-span-2 sm:flex hidden justify-center items-center text-xl font-bold">
          Left Component
        </div>

        <div
          className="
            col-span-2 row-span-2 flex justify-center items-center 
            sm:col-span-2 sm:row-span-2 
            col-span-4 row-span-2
          "
        >
          <Scene />
        </div>

        <div className="row-span-2 sm:flex hidden justify-center items-center text-xl font-bold">
          Right Component
        </div>

        <div className="col-span-4 flex justify-center items-center text-2xl font-bold">
          Lower Heading Component
        </div>
      </div>
    </main>
  )
}
