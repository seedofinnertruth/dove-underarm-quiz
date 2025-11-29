import OrangeHeader from "../assets/images/header/OrangeVariant.png";
import OrangeProduct from "../assets/images/products/OrangeVariant.png";
import PinkHeader from "../assets/images/header/PinkVariant.png";
import PinkProduct from "../assets/images/products/PinkVariant.png";
import PurpleHeader from "../assets/images/header/PurpleVariant.png";
import PurpleProduct from "../assets/images/products/PurpleVariant.png";
import SensitiveHeader from "../assets/images/header/SensitiveVariant.png";
import SensitiveProduct from "../assets/images/products/SensitiveVariant.png";

export const questions = [
   {
      id: 1,
      question: "Do you have sensitive underarm skin?",
      choices: [
         { id: "a", text: "Yes", variant: "pink" },
         { id: "b", text: "No", variant: "orange" },
      ],
   },
   {
      id: 2,
      question: "Do you have chicken skin?",
      choices: [
         { id: "a", text: "Yes", variant: "purple" },
         { id: "b", text: "No", variant: "orange" },
      ],
   },
   {
      id: 3,
      question: "Do you have dark marks on your underarms?",
      choices: [
         { id: "a", text: "Yes", variant: "orange" },
         { id: "b", text: "No", variant: "pink" },
      ],
   },
   {
      id: 4,
      question: "Do you shave (instead of wax/laser/pluck)?",
      choices: [
         { id: "a", text: "Yes", variant: "orange" },
         { id: "b", text: "No", variant: "purple" },
      ],
   },
   {
      id: 5,
      question: "Which skin goal do you prioritize for your underarms?",
      choices: [
         { id: "a", text: "Smooth", variant: "purple" },
         { id: "b", text: "Even-Toned", variant: "orange" },
         { id: "c", text: "Calm/Soothed", variant: "pink" },
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
   sensitive: {
      header: SensitiveHeader,
      product: SensitiveProduct,
   },
};

export const patterns = [
   { match: ["Yes", "Yes", "Yes", "Yes", null], result: "pink" },
   { match: ["No", "No", "No", "No", null], result: "pink" },
   { match: ["Yes", "Yes", "Yes", "No", "Smooth"], result: "purple" },
   { match: ["Yes", "Yes", "Yes", "No", "Even-Toned"], result: "orange" },
   { match: ["Yes", "Yes", "Yes", "No", "Calm/Soothed"], result: "sensitive" },
   { match: ["Yes", "Yes", "No", null, "Smooth"], result: "purple" },
   { match: ["Yes", "Yes", "No", null, "Even-Toned"], result: "orange" },
   { match: ["Yes", "Yes", "No", null, "Calm/Soothed"], result: "sensitive" },
   { match: ["Yes", "No", "Yes", null, "Smooth"], result: "purple" },
   { match: ["Yes", "No", "Yes", null, "Even-Toned"], result: "orange" },
   { match: ["Yes", "No", "Yes", null, "Calm/Soothed"], result: "sensitive" },
   { match: ["No", "Yes", "Yes", null, "Smooth"], result: "purple" },
   { match: ["No", "Yes", "Yes", null, "Even-Toned"], result: "orange" },
   { match: ["No", "Yes", "Yes", null, "Calm/Soothed"], result: "sensitive" },
   { match: ["Yes", "No", "No", null, null], result: "sensitive" },
   { match: ["No", "Yes", "No", null, null], result: "purple" },
   { match: ["No", "No", "Yes", null, null], result: "orange" },
   { match: ["No", "No", "No", null, null], result: "sensitive" },
];
