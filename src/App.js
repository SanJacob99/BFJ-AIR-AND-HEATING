import "./App.css";
import NavBar from "./components/NavBar";
import HeroImage from "./components/HeroImage";

function App() {
  return (
    <div className="landing-parent">
      <header className="landing-header">
        <ul className="landing-header-list">
          <li>
            <a href="#">OFFER</a>
          </li>
          <li>
            <a href="#">CUSTOMERS</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </header>
      <nav>
        <NavBar />
      </nav>
      <div className="hero-section">
        <HeroImage />
      </div>
    </div>
  );
}

export default App;
