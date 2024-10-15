import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => <h2>Home</h2>;
const Education = () => <h2>Education</h2>;
const Work = () => <h2>Work</h2>;
const SWEProjects = () => <h2>SWE Projects</h2>;
const MobileAppProjects = () => <h2>Mobile App Projects</h2>;
const CyberProjects = () => <h2>Cybersecurity Projects</h2>;
const Skills = () => <h2>Skills</h2>;
const Contact = () => <h2>Contact</h2>;

export default function Nav() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/sweprojects" element={<SWEProjects />} />
        <Route path="/appdevprojects" element={<MobileAppProjects />} />
        <Route path="/cyberprojects" element={<CyberProjects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
