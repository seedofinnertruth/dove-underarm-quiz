import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export function useQuiz() {
   const context = useContext(QuizContext);
   if (!context) {
      throw new Error("useQuiz must be used within a QuizProvider");
   }
   return context;
}
