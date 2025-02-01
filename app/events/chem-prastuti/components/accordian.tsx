import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Rules() {
    return (
      <Accordion type="single" collapsible className="w-full text-gray-700 p-4 lg:p-8">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">Rules of Chem Prastuti : </h1>
        <p className="leading-7 mb-4">
            Themes
        </p>
        
        <AccordionItem value="item-1">
          <AccordionTrigger>First Theme</AccordionTrigger>
          <AccordionContent>
            Water conservation techniques in Ancient Bharat 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Theme</AccordionTrigger>
          <AccordionContent>
          Chemistry in Ancient Bharat
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third Theme</AccordionTrigger>
          <AccordionContent>
          Nanotechnology/Nanomaterials used in Ancient Bharat
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
    