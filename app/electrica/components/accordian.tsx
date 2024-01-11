import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Rules() {
    return (
      <Accordion type="single" collapsible className="w-full text-gray-700 p-8">
        <h1>Rules of Electrica : </h1>
        <p className="leading-7 mb-4">
            Total 3 rounds
        </p>
        <AccordionItem value="item-1">
          <AccordionTrigger>RULES FOR ROUND 1 :</AccordionTrigger>
          <AccordionContent>
            1. This round consist of technical quiz on fundamentals of Electronics and Electrical Engineering.<br/>
            2. Participants need to solve 25 MCQ , the time of submission and score will be judging criterion .<br/>
            3. Maximum time for the first round is 20 minutes.<br/>
            4. Use of scientific calculator is allowed.<br/>
            5. Participation should be in groups containing minimum 2 or maximum 3 students .
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Instructions Round 2 :</AccordionTrigger>
          <AccordionContent>
            1. In this round you will be given questions that are to be solved and write answers for all on a paper which you will need to submit in or before time. Questions will be based on Word search, Puzzle, Jumbled words etc. <br/>
            2. Remember to submit and put your group name on the answer sheets.<br/>
            3. Maximum time for Round 2 is 30 minutes.<br/>
            4. Time of submission and score will be judging criterion of round 2
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Instructions Round 3 :</AccordionTrigger>
          <AccordionContent>
            1. This is final round of electrica event. At the end of this round, three groups will be declared as winners. <br/>
            2. Students need to build / simulate circuits to reach the end destination. <br/>
            3. Time required and correctness of circuits will be considered for declaration of winners. <br/>
            4. Maximum time for round is 35 minutes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
    