import styled from "styled-components";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import Education from "./components/Education.tsx";
import SWEProjects from "./components/sweprojects.tsx";
import AppDevProjects from "./components/appdevprojects.tsx";
import CyberProjects from "./components/cyberprojects.tsx";
import Work from "./components/Work.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  min-height: 83vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #bfdbf7;
  }
`;
const MainPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const Root = () => {
  return (
    <MainPage>
      <Header />
      <MainContent>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/education" element={<Education />} />
          <Route path="/sweprojects" element={<SWEProjects />} />
          <Route path="/appdevprojects" element={<AppDevProjects />} />
          <Route path="/cyberprojects" element={<CyberProjects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
      <Footer />
    </MainPage>
  );
};
const router = createBrowserRouter([{ path: "*", Component: Root }]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
