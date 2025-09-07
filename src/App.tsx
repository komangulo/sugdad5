import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import SerSugarBabyMadrid from "./pages/blog/ser-sugar-baby-madrid-sin-experiencia";
import BeneficiosSugarDaddyMadrid from "./pages/blog/beneficios-tener-sugar-daddy-madrid";
import ConfidenteYTutor from "./pages/blog/confidente-y-tutor-sugar-daddy";
import FilosofiaSugarDaddy from "./pages/blog/filosofia-sugar-daddy-madrid";
import GuiaMentoriaSugarDaddy from "./pages/blog/sugar-daddy-madrid-guia-mentoria";
import MentorConfidenteTutor from "./pages/blog/mentor-confidente-tutor-sugar-daddy";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <main className="pt-16">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ser-sugar-baby-madrid-sin-experiencia" element={<SerSugarBabyMadrid />} />
        <Route path="/blog/beneficios-tener-sugar-daddy-madrid" element={<BeneficiosSugarDaddyMadrid />} />
        <Route path="/blog/confidente-y-tutor-sugar-daddy" element={<ConfidenteYTutor />} />
        <Route path="/blog/filosofia-sugar-daddy-madrid" element={<FilosofiaSugarDaddy />} />
        <Route path="/blog/sugar-daddy-madrid-guia-mentoria" element={<GuiaMentoriaSugarDaddy />} />
        <Route path="/blog/mentor-confidente-tutor-sugar-daddy" element={<MentorConfidenteTutor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
