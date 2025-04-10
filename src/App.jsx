// Styles
import "./styles/app.scss";

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Resume from "./components/resume";
import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";

export default function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <main>
        <Projects></Projects>
        <Resume></Resume>
        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}
