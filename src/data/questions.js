import OrangeHeader from "../assets/images/header/OrangeVariant.png";
import OrangeProduct from "../assets/images/products/OrangeVariant.png";
import PinkHeader from "../assets/images/header/PinkVariant.png";
import PinkProduct from "../assets/images/products/PinkVariant.png";
import PurpleHeader from "../assets/images/header/PurpleVariant.png";
import PurpleProduct from "../assets/images/products/PurpleVariant.png";

export const questions = [
   {
      id: 1,
      question: "I am most conscious of my underarms because of:",
      choices: [
         { id: "a", text: "Dark marks and uneven skin tone", variant: "orange" },
         { id: "b", text: "Bumps and rough texture (chicken skin)", variant: "purple" },
         { id: "c", text: "Redness and irritation", variant: "pink" },
      ],
   },
   {
      id: 2,
      question: "I hesitate to wear sleeveless tops because:",
      choices: [
         { id: "a", text: "My underarms look dark", variant: "orange" },
         { id: "b", text: "My underarms feel rough and bumpy", variant: "purple" },
         { id: "c", text: "My underarms get red or sensitive easily", variant: "pink" },
      ],
   },
   {
      id: 3,
      question: "My underarms tend to react negatively when I:",
      choices: [
         { id: "a", text: "Shave/wax/laser frequently", variant: "orange" },
         { id: "b", text: "Use products with strong ingredients", variant: "purple" },
         { id: "c", text: "Wear tight clothing or sweat a lot", variant: "pink" },
      ],
   },
   {
      id: 4,
      question: "What's your experience with shaving / waxing / lasering?",
      choices: [
         { id: "a", text: "It helped remove hair, but I noticed darkening.", variant: "orange" },
         { id: "b", text: "It made my underarms feel dry and bumpy.", variant: "purple" },
         { id: "c", text: "My skin felt red and irritated afterward.", variant: "pink" },
      ],
   },
   {
      id: 5,
      question: "If I could improve one thing about my underarms, I'd want them to be:",
      choices: [
         { id: "a", text: "Brighter and more even-toned", variant: "orange" },
         { id: "b", text: "Smoother and softer", variant: "purple" },
         { id: "c", text: "Calmer and less irritated", variant: "pink" },
      ],
   },
   {
      id: 6,
      question: "Which statement best describes your underarm hair removal routine?",
      choices: [
         { id: "a", text: "I shave/wax/laser, and I've noticed dark marks over time", variant: "orange" },
         { id: "b", text: "I shave/wax/laser, and my underarms feel rough after", variant: "purple" },
         { id: "c", text: "I shave/wax/laser, and my skin often gets red and irritated", variant: "pink" },
      ],
   },
   {
      id: 7,
      question: "Your dream deodorant serum would make your underarms feel:",
      choices: [
         { id: "a", text: "Radiant and even-toned.", variant: "orange" },
         { id: "b", text: "Smooth and silky.", variant: "purple" },
         { id: "c", text: "Comfortable and irritation-free.", variant: "pink" },
      ],
   },
   {
      id: 8,
      question: "When you try new deodorants, what's your biggest worry?",
      choices: [
         { id: "a", text: "Will it help lighten my dark marks?", variant: "orange" },
         { id: "b", text: "Will it smooth out my rough skin?", variant: "purple" },
         { id: "c", text: "Will it be gentle and not irritate me?", variant: "pink" },
      ],
   },
   {
      id: 9,
      question: "You feel more confident when:",
      choices: [
         { id: "a", text: "Your underarms look bright and clear.", variant: "orange" },
         { id: "b", text: "Your underarms are smooth and soft to the touch.", variant: "purple" },
         { id: "c", text: "Your underarms are calm, non-irritated, and comfortable.", variant: "pink" },
      ],
   },
   {
      id: 10,
      question: "How would you describe your skincare routine for your underarms?",
      choices: [
         { id: "a", text: "I try to use brightening products to even out dark marks.", variant: "orange" },
         { id: "b", text: "I exfoliate often to smooth out roughness.", variant: "purple" },
         { id: "c", text: "I use gentle products because my skin gets irritated easily.", variant: "pink" },
      ],
   },
   {
      id: 11,
      question: "Which of these skincare ingredients excites you the most?",
      choices: [
         { id: "a", text: "Vitamin C & E – I want brightening and glowing skin!", variant: "orange" },
         { id: "b", text: "Omega 6 – I want smoother, softer skin.", variant: "purple" },
         { id: "c", text: "Collagen – I need soothing and strengthening care.", variant: "pink" },
      ],
   },
   {
      id: 12,
      question: "What are your #UnderarmGoals?",
      choices: [
         { id: "a", text: "Bright and even-toned, like a glowing model.", variant: "orange" },
         { id: "b", text: "Smooth and bump-free, like an airbrushed photo.", variant: "purple" },
         { id: "c", text: "Soft and healthy-looking, like naturally fresh skin.", variant: "pink" },
      ],
   },
];

export const results = {
   orange: {
      header: OrangeHeader,
      product: OrangeProduct,
   },
   pink: {
      header: PinkHeader,
      product: PinkProduct,
   },
   purple: {
      header: PurpleHeader,
      product: PurpleProduct,
   },
};
