import { useQuiz } from "../context/useQuiz";
import { questions } from "../data/questions";
import DoveLogo from "../assets/images/icon/dove icon.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ButtonAlt from "../components/ButtonAlt";

export default function Questions() {
   const { currentQuestion, selectChoice, nextQuestion, previousQuestion, getCurrentAnswer } = useQuiz();
   const navigate = useNavigate();

   const currentQuestionData = questions[currentQuestion];
   const isLastQuestion = currentQuestion === questions.length - 1;
   const isFirstQuestion = currentQuestion === 0;
   const currentAnswer = getCurrentAnswer();

   const handleChoiceSelect = (choice) => {
      selectChoice(choice);
   };

   const handlePrevious = () => {
      if (!isFirstQuestion) {
         previousQuestion();
      }
   };

   const handleNext = () => {
      if (!currentAnswer) {
         return;
      }

      if (isLastQuestion) {
         navigate("/results");
         return;
      }

      nextQuestion();
   };

   if (!currentQuestionData) {
      return (
         <main className='w-full h-screen flex items-center justify-center'>
            <div className='text-center'>
               <h1 className='text-4xl font-medium text-primary'>No more questions</h1>
            </div>
         </main>
      );
   }

   return (
      <main className='w-full h-screen flex items-center justify-center'>
         <div className='max-w-4xl w-full md:w-100 lg:w-180 px-6'>
            {/* Question */}
            <div className='text-center mb-12'>
               <h2 className='text-2xl lg:text-4xl text-primary mb-4 text-center lg:leading-13'>
                  {currentQuestionData.question}
               </h2>
            </div>

            {/* Choices */}
            <div className='grid grid-cols-1 gap-2 md:gap-4 mb-12'>
               {currentQuestionData.choices.map((choice) => {
                  const isSelected = currentAnswer?.id === choice.id;
                  return (
                     <button
                        key={choice.id}
                        onClick={() => handleChoiceSelect(choice)}
                        className={`flex max-[450px]:w-full w-4/5 md:w-full mx-auto border-2 border-transparent hover:border-secondary items-center gap-4 rounded-full transition-all p-4 cursor-pointer text-left text-base lg:text-xl ${
                           isSelected ? "border-secondary! bg-secondary/10" : ""
                        }`}
                     >
                        <img src={DoveLogo} alt='Dove Logo' className='h-6 brightness-85' />
                        <span>{choice.text}</span>
                     </button>
                  );
               })}
            </div>

            {/* Navigation */}
            <div className='flex justify-center items-center gap-4 mt-8'>
               <ButtonAlt onClick={handlePrevious} disabled={isFirstQuestion}>
                  Previous
               </ButtonAlt>
               <Button onClick={handleNext} className={`w-35 h-12 lg:h-15 ${!currentAnswer ? "opacity-50" : ""}`}>
                  Next
               </Button>
            </div>
         </div>
      </main>
   );
}
