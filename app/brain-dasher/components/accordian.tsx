import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Rules() {
    return (
      <Accordion type="single" collapsible className="w-full text-gray-700 p-6">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">Rules of Brain Dasher : </h1>
        <p className="leading-7 mb-4">
            Total 3 rounds
        </p>
        
        <AccordionItem value="item-1">
          <AccordionTrigger>ROUND 1: Basic Aptitude Test (Offline mode)</AccordionTrigger>
          <AccordionContent>
          1. TOP 50 STUDENTS WILL BE SHORTLISTED FOR ROUND 2.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>ROUND 2: Software based Mathematical Puzzles (Offline in Computer lab)</AccordionTrigger>
          <AccordionContent>
          1. TOP 08 STUDENTS WILL BE SHORTLISTED FOR ROUND 3 BASED ON SUBMISSION TIME.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>ROUND 3: Model based Mathematical Puzzles</AccordionTrigger>
          <AccordionContent>
          1. Model based Mathematical Puzzles
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
    