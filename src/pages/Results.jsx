import { useQuiz } from "../context/useQuiz";
import { questions, results } from "../data/questions";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useMemo, useEffect } from "react";
import DoveLogo from "../assets/images/icon/dove icon.png";
import ButtonAlt from "../components/ButtonAlt";

export default function Results() {
   const { chosenChoices, resetQuiz } = useQuiz();
   const questionLength = questions.length;
   const navigate = useNavigate();

   // Redirect to home if quiz is incomplete
   useEffect(() => {
      const validAnswers = chosenChoices.filter((choice) => choice !== undefined && choice !== null);
      if (validAnswers.length !== questionLength) {
         navigate("/");
      }
   }, [chosenChoices, navigate]);

   // Calculate which variant has the most votes
   const recommendedProduct = useMemo(() => {
      const variantCounts = { orange: 0, purple: 0, pink: 0 };

      chosenChoices.forEach((choice) => {
         if (choice && choice.variant) {
            variantCounts[choice.variant]++;
         }
      });

      const topVariant = Object.entries(variantCounts).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
      console.log(variantCounts);
      console.log("Top Variant:", topVariant);

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
                  className='mx-auto mb-10 max-[450px]:w-full w-4/5 max-w-160'
               />

               <img
                  src={recommendedProduct.product}
                  alt={recommendedProduct.variant}
                  className='mx-auto mb-12 w-35 md:w-55 lg:w-60'
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
