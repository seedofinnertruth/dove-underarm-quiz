import { useQuiz } from "../context/useQuiz";
import { questions, patterns } from "../data/questions";
import DoveLogo from "../assets/images/icon/dove icon.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ButtonAlt from "../components/ButtonAlt";
import { useMemo } from "react";

export default function Questions() {
   const { currentQuestion, chosenChoices, selectChoice, goToQuestion, getCurrentAnswer } = useQuiz();
   const navigate = useNavigate();

   const visibleQuestions = useMemo(() => {
      const answers = chosenChoices.map((choice) => choice?.text || null);
      const visible = [true, true, true, true, true];

      for (const pattern of patterns) {
         let isMatch = true;
         for (let i = 0; i < Math.min(pattern.match.length, answers.length); i++) {
            if (pattern.match[i] !== null && answers[i] !== null && answers[i] !== pattern.match[i]) {
               isMatch = false;
               break;
            }
         }

         if (isMatch) {
            pattern.match.forEach((match, index) => {
               if (match === null && index < visible.length) {
                  visible[index] = false;
               }
            });
            break;
         }
      }

      return visible;
   }, [chosenChoices]);

   const getNextVisibleQuestion = (fromIndex) => {
      for (let i = fromIndex + 1; i < questions.length; i++) {
         if (visibleQuestions[i]) return i;
      }
      return -1;
   };

   const getPreviousVisibleQuestion = (fromIndex) => {
      for (let i = fromIndex - 1; i >= 0; i--) {
         if (visibleQuestions[i]) return i;
      }
      return -1;
   };

   const currentQuestionData = questions[currentQuestion];
   const isFirstQuestion = getPreviousVisibleQuestion(currentQuestion) === -1;
   const currentAnswer = getCurrentAnswer();

   const handleChoiceSelect = (choice) => {
      selectChoice(choice);

      setTimeout(() => {
         const nextVisibleQuestion = getNextVisibleQuestion(currentQuestion);

         if (nextVisibleQuestion === -1) {
            navigate("/results");
            return;
         }

         goToQuestion(nextVisibleQuestion);
      }, 300);
   };

   const handlePrevious = () => {
      const prevQuestion = getPreviousVisibleQuestion(currentQuestion);
      if (prevQuestion !== -1) {
         goToQuestion(prevQuestion);
      }
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
         <div className='max-w-4xl w-full md:w-3/4 px-6'>
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
                        <img src={DoveLogo} alt='Dove Logo' className='h-5 md:h-6 brightness-85' />
                        <span>{choice.text}</span>
                     </button>
                  );
               })}
            </div>

            {/* Navigation */}
            <div className='flex justify-center items-center mt-8'>
               <ButtonAlt className='text-base! py-2' onClick={handlePrevious} disabled={isFirstQuestion}>
                  PREVIOUS
               </ButtonAlt>
            </div>
         </div>
      </main>
   );
}
