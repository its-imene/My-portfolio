
import "./Hero.css";
import girl from "../assets/Frame 6.svg";
import star from "../assets/vectoor.svg";
import star3 from "../assets/Frame 7.svg";
import vscode from "../assets/vscode.svg";
import fleche from "../assets/fleche.svg";
import react from "../assets/reactt.svg";
import figma1 from "../assets/figma1.svg";

export default function Hero() {
  return (
    <>
      <div className="doodles">
        <img src={star3} className="second-star" />
        <img src={star} className="first-star" />
        <img src={vscode} className="vscode-logo" />
        <img src={fleche} className="fleche" />
        <img src={react} className="react" />
        <img src={figma1} className="figma1" />

      </div>
      <section className="hero" id="home">

        <div className="hero-left">
          <img src={girl} className="hero-img" alt="girl illustration" />
        </div>

        <div className="hero-right">
          <h1 className="fade-in">Hello ! I'm <span className="purple">Imene</span></h1>
          <p className="fade-in">
            A  <span className="pink">Front-end developer<span className="white"> &</span> UX UI Designer</span> blending
            patience with creativity to craft seamless, beautiful digital experiences.
          </p>
          <a href="#contact">
            <button className="cta" >Contact Me</button>
          </a>
        </div>
      </section>

    </>
  );
}
