import Info from "@/components/globals/info"
import Exif from "@/components/globals/exif"
import Hero from "@/components/globals/hero"


export function Main() {
  return (
    <section className="py-2 px-14">
      <Hero />
      <div className="flex justify-center border border-gray-200 mt-8 p-6  rounded-md gap-6 my-4 mx-6">
       <Exif /> 
      </div>
        <Info />
    </section>
  )
}
