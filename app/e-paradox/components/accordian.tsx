import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Rules() {
    return (
      <Accordion type="single" collapsible className="w-full text-gray-700 p-6">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">Rules of Electrica : </h1>
        <p className="leading-7 mb-4">
            Total 5 rounds
        </p>
        
        <AccordionItem value="item-1">
          <AccordionTrigger>ROUND 1: Quick Code Quest</AccordionTrigger>
          <AccordionContent>
           1. MCQ’s & Solving code questions <br/>
           2. Questions - 25 to 30 <br/>
           3. Time – 30 – 45 minutes
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>ROUND 2: Odd Function Out</AccordionTrigger>
          <AccordionContent>
          1. Participants will be given a faulty code which will have certain errors in it and they will have to debug it before the buzzer buzzes. <br/>
          2. It will be short 15 minutes knockout buzzer round.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>ROUND 3: Tech Sprint</AccordionTrigger>
          <AccordionContent>
          1. Relay based coding sprint challenge. <br/>
          2. Students will be divided in group 4-5 students by the coordinators itself. <br/>
          3. Each team will have to solve a code after which one player from the team will run to the checkpoint to get the next challenge for their team. <br/>
          4. At the checkpoint the student will have to play a mini game and win it to get the next code for their team. <br/>
          5. It would include 3-4 laps. <br/>
          6. Time – 1 hour
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>ROUND 4: Into The Unknown</AccordionTrigger>
          <AccordionContent>
          1. Teams will be thrown into the unknown chaos of code completion. <br/>
          2. One player will start completing the code whilst the other members of the teams will be blindfolded. When the buzzer buzzes the players will switch places and the next player will continue the unfinished code. <br/>
          3. The buzzer will buzz every 90 seconds. The players will switch places every 90 seconds. <br/>
          4. The round will last 12-15 minutes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>ROUND 5: Programming Showdown</AccordionTrigger>
          <AccordionContent>
          1. To decide the winners, we will have a coding war between the best of the participants. <br/>
          2. A fierce 1 vs 1 competition between the 8 finalists from the 2 winning teams. <br/>
          3. Time – 30 minutes
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
    