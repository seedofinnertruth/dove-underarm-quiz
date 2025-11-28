import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Results from "./pages/Results";

export default function App() {
   return (
      <HashRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/survey' element={<Questions />} />
            <Route path='/results' element={<Results />} />
         </Routes>
      </HashRouter>
   );
}
