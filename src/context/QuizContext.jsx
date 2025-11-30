import { createContext, useState } from "react";

export const QuizContext = createContext(); // eslint-disable-line

export function QuizProvider({ children }) {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [chosenChoices, setChosenChoices] = useState([]);

   const selectChoice = (choice) => {
      setChosenChoices((prev) => {
         const newChoices = [...prev];
         newChoices[currentQuestion] = choice;
         return newChoices;
      });
   };

   const nextQuestion = () => {
      setCurrentQuestion((prev) => prev + 1);
   };

   const previousQuestion = () => {
      setCurrentQuestion((prev) => Math.max(0, prev - 1));
   };

   const goToQuestion = (index) => {
      setCurrentQuestion(index);
   };

   const getCurrentAnswer = () => {
      return chosenChoices[currentQuestion];
   };

   const resetQuiz = () => {
      setCurrentQuestion(0);
      setChosenChoices([]);
   };

   const getTotalScore = () => {
      return chosenChoices.reduce((sum, choice) => sum + (choice.value || 0), 0);
   };

   return (
      <QuizContext.Provider
         value={{
            currentQuestion,
            chosenChoices,
            selectChoice,
            nextQuestion,
            previousQuestion,
            goToQuestion,
            resetQuiz,
            getTotalScore,
            getCurrentAnswer,
         }}
      >
         {children}
      </QuizContext.Provider>
   );
}
