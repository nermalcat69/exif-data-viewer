import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
      <section className="ml-2">
          <span className="flex space-x-1">
            <Badge variant="outline">Built by nermalcat69</Badge>
          </span>
 
          <div className="ml-2">
                      <h2 className="text-lg font-bold mt-4">Exif Data Viewer</h2>
            <p>              
                This exif data previewer shows the metadata of the image files, pdfs, svgs
          </p>
</div>
    </section>
  )
}
