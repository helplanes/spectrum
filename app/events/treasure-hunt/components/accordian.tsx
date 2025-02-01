import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Rules() {
    return (
      <Accordion type="single" collapsible className="w-full text-gray-700 p-6">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">Rules of Treasure Hunt : </h1>
        <p className="leading-7 mb-4">
            Total 3 rounds
        </p>
        
        <AccordionItem value="item-1">
          <AccordionTrigger>Round 1 (Aptitude test): </AccordionTrigger>
          <AccordionContent>
            No coding skills required in all rounds. A quick 15min test with logical reasoning and English. <br/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Round 2 (Mystery Mania): </AccordionTrigger>
          <AccordionContent>
          Step into the world of mystery in Mystery Mania, where puzzling photos await! <br/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Round 3 (Treasure Hunt): </AccordionTrigger>
          <AccordionContent>
          Whispers of fortune guide your path. Can you solve the puzzles, claim the prize? The hunt begins soon. Dare to join? <br/>
          Highlights: Lazer maze obstacle course to be included😉.<br/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
    