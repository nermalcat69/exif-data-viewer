import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Badge } from "@/components/ui/badge"


export default function Info() {
  return (
    <section className="mx-5">
      <div className="py-2">
        <h3 className="text-md font-semibold mt-2 mb-3">Supports</h3>
          <span className="flex space-x-1">
            <Badge variant="outline">Png</Badge>
            <Badge variant="outline">Jpeg</Badge>
            <Badge variant="outline">Webp</Badge>
            <Badge variant="outline">Heic</Badge>
            <Badge variant="outline">Avif</Badge>
            <Badge variant="outline">Svg</Badge>
            <Badge variant="outline">Pdf</Badge>
            <Badge variant="outline">Avif</Badge>
          </span> 
      </div>
    <Accordion className="pt-8" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How do i utilize this markdown previewer ?
        </AccordionTrigger>
        <AccordionContent>
          Well you can write in the textarea of markdown code or fetch a
          markdown file from github repository.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          How do i utilize this markdown previewer ?
        </AccordionTrigger>
        <AccordionContent>
          Well you can write in the textarea of markdown code or fetch a
          markdown file from github repository.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          How do i utilize this markdown previewer ?
        </AccordionTrigger>
        <AccordionContent>
          Well you can write in the textarea of markdown code or fetch a
          markdown file from github repository.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          How do i utilize this markdown previewer ?
        </AccordionTrigger>
        <AccordionContent>
          Well you can write in the textarea of markdown code or fetch a
          markdown file from github repository.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    </section>
  )
}
