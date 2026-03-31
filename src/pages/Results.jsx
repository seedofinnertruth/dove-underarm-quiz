import { useQuiz } from "../context/useQuiz";
import { results, patterns } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { useMemo, useEffect } from "react";
import DoveLogo from "../assets/images/icon/dove icon.png";
import ButtonAlt from "../components/ButtonAlt";
import ShopeeIcon from "../assets/images/icon/shopee.png";
import LazadaIcon from "../assets/images/icon/lazada.png";
import TiktokIcon from "../assets/images/icon/tiktokshop.png";

export default function Results() {
   const { chosenChoices, resetQuiz } = useQuiz();
   const navigate = useNavigate();

   useEffect(() => {
      const answers = chosenChoices.map((choice) => choice?.text || null);
      let hasMatchingPattern = false;

      for (const pattern of patterns) {
         let isMatch = true;
         let requiredAnswers = 0;

         for (let i = 0; i < pattern.match.length; i++) {
            if (pattern.match[i] !== null) {
               requiredAnswers++;
               if (answers[i] === null || answers[i] !== pattern.match[i]) {
                  isMatch = false;
                  break;
               }
            }
         }

         if (isMatch && requiredAnswers > 0) {
            hasMatchingPattern = true;
            break;
         }
      }

      if (!hasMatchingPattern && chosenChoices.filter((c) => c).length === 0) {
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
      window.location.href = "https://dove-survey.vercel.app/";
   };

   return (
      <main className='w-full h-screen flex items-center justify-center px-6 md:px-12'>
         <div className='w-full text-center'>
            <div className='mb-8'>
               <img src={DoveLogo} alt='Dove Logo' className='h-8 brightness-85 mx-auto mb-8' />

               <img
                  src={recommendedProduct.header}
                  alt={`${recommendedProduct.variant} Header`}
                  className='mx-auto mb-10 h-full md:h-35 lg:h-40 object-contain'
               />

               <img
                  src={recommendedProduct.product}
                  alt={recommendedProduct.variant}
                  className='mx-auto mb-4 h-50 md:h-55'
               />
            </div>

            <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5'>
               <div className='flex items-center gap-1.5'>
                  <h1 className='font-bold mr-2'>SHOP NOW</h1>
                  <a
                     target='_blank'
                     href='https://shopee.ph/scp/40869364/eyJjaWQiOjc2MjkyLCJzaWQiOjQwODY3OTc4LCJpc0RyYWZ0IjpmYWxzZX0%3D'
                  >
                     <img src={ShopeeIcon} alt='Shopee' className='h-9 md:h-12 mx-auto' />
                  </a>
                  <a
                     target='_blank'
                     href='https://www.lazada.com.ph/shop/unilever-beauty/custom-1709797926763.htm?wh_weex=true'
                  >
                     <img src={LazadaIcon} alt='Lazada' className='h-9 md:h-12 mx-auto' />
                  </a>
                  <a target='_blank' href='https://www.tiktok.com/@dove.ph?_t=ZS-90BkVtsSaXP&_r=1'>
                     <img src={TiktokIcon} alt='TikTok' className='h-9 md:h-12 mx-auto' />
                  </a>
               </div>
               <ButtonAlt onClick={handleRetakeQuiz} className='w-45 lg:h-12! text-sm md:text-base!'>
                  HOME
               </ButtonAlt>
            </div>
         </div>
      </main>
   );
}
