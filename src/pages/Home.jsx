// import { useQuiz } from "../context/useQuiz";
import DoveLogo from "../assets/images/icon/dove icon.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
   const navigate = useNavigate();

   const handleStartQuiz = () => {
      navigate("/survey");
   };

   return (
      <main className='w-full h-screen flex items-center justify-center max-[500px]:px-6 lg:px-45'>
         <div className='flex flex-col items-center space-y-5 text-center w-full md:w-3/5 lg:w-2/3'>
            <img src={DoveLogo} alt='Dove Logo' className='h-7 lg:mb-8 brightness-85' />
            <h1 className='font-medium text-3xl md:text-3xl lg:text-5xl text-primary mb-8'>
               DOVE UNDERARM SKIN ANALYZER
            </h1>
            <p className='text-lg lg:text-2xl lg:leading-10'>
               Got underarm insecurities? Let's find your perfect Dove Deo match!
            </p>
            <p className='text-lg lg:text-2xl lg:leading-10 font-medium'>
               Answer a few questions to discover the best solution for your underarm skin concerns.
            </p>
            <Button className='mt-4 text-sm md:text-base' onClick={handleStartQuiz}>
               START UNDERARM QUIZ
            </Button>
         </div>
      </main>
   );
}
