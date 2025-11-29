import { useQuiz } from "../context/useQuiz";
import { questions, results, patterns } from "../data/questions";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useMemo, useEffect } from "react";
import DoveLogo from "../assets/images/icon/dove icon.png";
import ButtonAlt from "../components/ButtonAlt";

export default function Results() {
   const { chosenChoices, resetQuiz } = useQuiz();
   const questionLength = questions.length;
   const navigate = useNavigate();

   useEffect(() => {
      const validAnswers = chosenChoices.filter((choice) => choice !== undefined && choice !== null);
      if (validAnswers.length !== questionLength) {
         navigate("/");
      }
   }, [chosenChoices, navigate]);

   const recommendedProduct = useMemo(() => {
      const answers = chosenChoices.map((choice) => choice?.text || "");

      for (const pattern of patterns) {
         let isMatch = true;

         for (let i = 0; i < pattern.match.length; i++) {
            const patternValue = pattern.match[i];
            const answerValue = answers[i];

            if (patternValue !== null && (answerValue === undefined || answerValue !== patternValue)) {
               isMatch = false;
               break;
            }
         }

         if (isMatch) {
            return results[pattern.result];
         }
      }

      const variantCounts = { orange: 0, purple: 0, pink: 0, sensitive: 0 };

      chosenChoices.forEach((choice) => {
         if (choice && choice.variant) {
            const variantKey = choice.variant.toLowerCase();
            variantCounts[variantKey] = (variantCounts[variantKey] || 0) + 1;
         }
      });

      const topVariant = Object.entries(variantCounts).reduce((a, b) => (b[1] > a[1] ? b : a))[0];

      return results[topVariant];
   }, [chosenChoices]);

   const handleRetakeQuiz = () => {
      resetQuiz();
      navigate("/");
   };

   return (
      <main className='w-full h-screen flex items-center justify-center px-6 md:px-12'>
         <div className='w-full text-center'>
            <div className='mb-8'>
               <img src={DoveLogo} alt='Dove Logo' className='h-8 brightness-85 mx-auto mb-8' />

               <img
                  src={recommendedProduct.header}
                  alt={`${recommendedProduct.variant} Header`}
                  className='mx-auto mb-10 h-full md:h-35 lg:h-40'
               />

               <img
                  src={recommendedProduct.product}
                  alt={recommendedProduct.variant}
                  className='mx-auto mb-12 h-50 md:h-50 lg:h-50'
               />
            </div>

            {/* Retake Quiz Button */}
            <ButtonAlt onClick={handleRetakeQuiz} className='w-45 text-base!'>
               START OVER
            </ButtonAlt>
         </div>
      </main>
   );
}
