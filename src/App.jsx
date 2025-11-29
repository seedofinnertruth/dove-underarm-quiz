import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import Questions2 from "./pages/Questions2";

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/survey' element={<Questions />} />
            <Route path='/results' element={<Results />} />
         </Routes>
      </BrowserRouter>
   );
}
