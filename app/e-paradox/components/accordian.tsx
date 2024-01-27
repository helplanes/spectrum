import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Rules() {
    return (
      <Accordion type="single" collapsible className="w-full text-gray-700 md:p-2 lg:p-8">
        <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">Rules of E-Paradox</h1>
        <p className="leading-7 mb-4">
            Total 5 rounds
        </p>
        <AccordionItem value="item-1">
          <AccordionTrigger>ROUND 1: Quick Code Quest</AccordionTrigger>
          <AccordionContent>
          This round features three sections: Basic Programming Questions, Basic Coding Theory Questions, and Coding Questions. Participants will showcase their programming skills, tackling theoretical concepts and hands-on challenges. The round is conducted offline, with the link provided a day before the event. <br/>
          <hr/>
          <hr className="h-px my-4 border-0 bg-gray-700"/>
          Rules: <br/>
          1.	This will be held on Google Form Platform. <br/>
          2.	Overall time limit for this round will be 10 minutes for each candidate <br/>
          3.	35% amongst all the candidates will be eliminated while others will appear for round 2 <br/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>ROUND 2: Odd Function Out</AccordionTrigger>
          <AccordionContent>
          &quot;Odd Function Out!&quot; Participants will receive a Hackerrank contest link the day before the event. Inside, there are four coding questions. Your task is to choose and solve any three questions that align with your coding strengths. <br/>
          <hr className="h-px my-4 border-0 bg-gray-700"/>
          Rules: <br/>
          1. This will be held on Hacker rank Platform. <br/>
          2. Overall time limit for this round will be 30 minutes for each candidate. <br/>
          3. 4 problem statements will be provided. Participants will have to solve any three amongst those four statements. <br/>
          4. 50% amongst all the candidates will be eliminated while others will appear for round 3 <br/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>ROUND 3: Tech Sprint (Team)</AccordionTrigger>
          <AccordionContent>
          In this round, coordinators will form groups, and each group will embark on a coding journey. Using your preferred programming language, solve a series of coding problems. Here&apos;s the twist: unlock folders on your PC by generating passwords based on the output of previous problems. Inside each folder lies a clue leading to the next challenge. <br/>
          <hr className="h-px my-4 border-0 bg-gray-700"/>
          Rules: <br/>
          1. This will be held on an online compiler(online GDB).<br/>
          2. Overall time limit for this round will be 60 minutes for each team.<br/>
          3. Each team will get 10 minutes to set their action plan and order for relay.<br/>
          4. During this round participants should take utmost care of not disturbing the college environment and causing any chaos in the campus.<br/> 
          5. Participant will be solely responsible for any damage/ harm caused due his/her recklessness.<br/>
          6. There will be 1 coordinator assigned to each team.<br/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>ROUND 4: Into the Unknown (Team)</AccordionTrigger>
          <AccordionContent>
          A single problem statement will be presented to each team, where Player 1 tackles the code for 90 seconds. Meanwhile, the remaining team members are blindfolded, ensuring they cannot observe Player 1&apos;s actions. When the time limit is reached, a buzzer signals the switch, with Player 2 taking the rein, followed by subsequent rotations for the remaining four team members. This unique challenge adds an element of suspense and coordination to the coding experience. <br/>
          <hr className="h-px my-4 border-0 bg-gray-700"/>
          Rules: <br/>
          1. This will be held on Compiler.<br/>
          2. Overall time limit for this round will be 30 minutes for each team.<br/>
          3. Two teams amongst all the teams will be eliminated while others will appear for round 5<br/>
          4. Each team will get 5 minutes to set their action plan.<br/>
          5. There will be 1 coordinator assigned to each team.<br/>
          6. After every 90 seconds the assigned coordinator for the team will turn the monitor and timer off and will only be resumed after the player switch places.<br/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>ROUND 5: Programming Showdown</AccordionTrigger>
          <AccordionContent>
          The top 8 finalists will engage in 1v1 battles, participants will face challenging coding questions, and the player who solves them accurately and quickly will advance to the semifinals. Tackling level 2 questions to determine the three ultimate winners. <br/>
          <hr className="h-px my-4 border-0 bg-gray-700"/>
          Rules: <br/>
          1. This will be held on Hacker rank.<br/>
          2. Overall time limit for this round will be 15 minutes for each 1v1. <br/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
    