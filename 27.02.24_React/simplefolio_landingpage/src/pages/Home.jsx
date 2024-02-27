import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import Nav from "../components/Nav/Nav";
import Projekt from "../components/Projekt/Projekt";
import Skills from "../components/Skills/Skills";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Nav />
      <Intro />
      <Projekt />
      <Skills />
      <Footer />
    </main>
  );
};

export default Home;
