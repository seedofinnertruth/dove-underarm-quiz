import { useQuiz } from "../context/useQuiz";
import { questions } from "../data/questions";
import DoveLogo from "../assets/images/icon/dove icon.png";
import { useNavigate } from "react-router-dom";

export default function Questions2() {
   const { currentQuestion, chosenChoices, selectChoice, nextQuestion, previousQuestion, getCurrentAnswer } = useQuiz();
   const navigate = useNavigate();

   const currentQuestionData = questions[currentQuestion];
   const isLastQuestion = currentQuestion === questions.length - 1;
   const isFirstQuestion = currentQuestion === 0;
   const currentAnswer = getCurrentAnswer();

   const handleChoiceSelect = (choice) => {
      selectChoice(choice);

      if (isLastQuestion) {
         navigate("/results");
         return;
      }

      nextQuestion();
   };

   const handlePrevious = () => {
      if (!isFirstQuestion) {
         previousQuestion();
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
      <main className='w-full h-screen flex items-center justify-center px-55'>
         <div className='max-w-4xl w-full'>
            <div className='flex items-center justify-center mb-6'>
               <img src={DoveLogo} alt='Dove Logo' className='h-8 brightness-85' />
            </div>
            {/* Progress Bar */}
            <div className='mb-8'>
               <div className='flex justify-between mb-2'>
                  <span className='text-sm text-gray-light'>
                     Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className='text-sm text-gray-light'>
                     {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
               </div>
               <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div
                     className='bg-secondary h-2 rounded-full transition-all duration-300'
                     style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
               </div>
            </div>

            {/* Question */}
            <div className='text-center mb-12'>
               <h2 className='text-4xl font-medium text-primary mb-4'>{currentQuestionData.question}</h2>
            </div>

            {/* Choices */}
            <div className='grid grid-cols-1 gap-4 mb-8'>
               {currentQuestionData.choices.map((choice) => {
                  const isSelected = currentAnswer?.id === choice.id;
                  return (
                     <button
                        key={choice.id}
                        onClick={() => handleChoiceSelect(choice)}
                        className={`p-6 border-2 rounded-lg transition-all text-left text-xl ${
                           isSelected
                              ? "border-secondary bg-secondary/10"
                              : "border-gray-300 hover:border-secondary hover:bg-secondary/5"
                        }`}
                     >
                        {choice.text}
                     </button>
                  );
               })}
            </div>

            {/* Navigation */}
            <div className='flex justify-between items-center mt-8'>
               <button
                  onClick={handlePrevious}
                  disabled={isFirstQuestion}
                  className={`text-lg ${
                     isFirstQuestion
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-primary cursor-pointer hover:underline"
                  }`}
               >
                  ← Previous
               </button>
               <div className='text-sm text-gray-light'>
                  {chosenChoices.length} answer{chosenChoices.length !== 1 ? "s" : ""} selected
               </div>
            </div>
         </div>
      </main>
   );
}
