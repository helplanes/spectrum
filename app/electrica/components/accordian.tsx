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
        This event is going to be team-based. <br/>
        A team should have a minimum of 2 and maximum of 5 members <br/>
        Entry fee: Rs 100/- per person <br/>
        <hr className="pt-4"/>
        Total 4 rounds : <br/>
        </p>
        <AccordionItem value="item-1">
          <AccordionTrigger>ROUND 1: RESISTANCE IS FUTILE</AccordionTrigger>
          <AccordionContent>
          1.	This round is going to be an Aptitude Test.<br/>
          2.	1 mark for correct question. There will not be any negative marking.<br/>
          3.	Questions will be based on basic concepts of electronics and few logic-based questions.<br/>
          4.	The use of a scientific calculator is allowed.<br/>
          5.	Use of smart phones, laptops, smart watches, etc. is strictly prohibited.<br/>
          6.	Test will be Paper-based.<br/>
          7.	Judging Criteria:<br/>
          Teams would be selected on the basis of number of questions answered correctly. <br/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>ROUND 2: FAST AND FURIOUS</AccordionTrigger>
          <AccordionContent>
          1.	This round will be a Buzzer Battle where each team have to answer the questions quickly and accurately<br/>
          2.	Team which hits the button first and answers the question correctly would be rewarded with 5 points. At the same time if a team hits the question and fails to answer correctly 3 points would be deducted.<br/>
          3.	Number of questions will be a surprise.<br/>
          4.	Team with the most points in a group will advance into the next round.<br/>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>ROUND 3: SIMULATED ERA</AccordionTrigger>
          <AccordionContent>
          1.	In this round each team would be given a circuit to build <br/>
          2.	The circuits will have to be built on multi-sim or digital trainer kit.<br/>
          3.	Each team can score maximum 50 points.<br/>
          4.	Judging Criteria:<br/>
          Points will be given based on time taken to complete circuit, execution and working of the circuit.<br/>
          5.	Each team would be given three life lines:<br/>
            •	Call-a-friend: <br/>
            You will be allowed to call your “smart” friend for help. He/she would be given 1 min to help you.<br/>
            •	Google help:<br/>
            Each team will be allowed to use google for 1 minute to find solution to their problem. You are only allowed to search for answers. Copy-pasting solution is not allowed.<br/>
            •	Expert’s Help:<br/>
            A team can ask our Co-ordinator to help complete one step in the circuit diagram. <br/>
          6.	Using one lifeline deducts 5 points from your total score.<br/>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>ROUND 4: CIRCUIT SAFARI</AccordionTrigger>
          <AccordionContent>
          1.	This will be the Final Showdown of the event.<br/>
          2.	Each team has to send one member to play in a game of real-life snakes and ladders with a twist of electronics.<br/>
          3.	Players would act as pawns who have to collect electronic components from the board.<br/>
          4.	There would also be a surprise task which will reward you with more components.<br/>
          5.	Teams can change their playing member during half-time.<br/>
          6.	After completing the game, each team will have to start building a physical circuit using the components collected from the board.<br/>
          7.	The First three teams who successfully build a working circuit as per the requirements wins the game!<br/>

          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
    