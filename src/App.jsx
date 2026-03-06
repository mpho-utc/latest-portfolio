import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMePage from "./pages/AboutMePage";
import Projectpage from "./pages/ProjectPage";
import Blogpage from "./pages/BlogPage"
import BlogpageID from "./pages/BlogPageID";
import ScrollToTop from "./assets/components/shared/scrollToTop";
import Projects from './pages/ProjectsPage';
// import ProjectProvider from './contexts/projectsContext'
import {usePortfolioData} from './contexts/PortfolioContext';
import GalaxyBackground from './assets/components/effects/galaxy'
import CosmicStars from './assets/components/effects/stars'
function App() {
  return (
      <HashRouter>
        
        <GalaxyBackground/>
        <ScrollToTop/>
        <Routes>
          <Route index element={<Homepage />} />
           <Route path="about" element={<AboutMePage />} />
          <Route path="projects/:id" element={<Projectpage />} />
          <Route path="projects" element={<Projects />} />
          
          <Route path="blogs" element={<Blogpage />} />
          <Route path="blogs/:blogID" element={<BlogpageID />} />
        </Routes>
      </HashRouter>
      // </BlogsProvider>
    // </ProjectProvider>
      
  );
}

export default App;
