import "./Stack.css";
import decor from "../assets/decor.svg";
import js from "../assets/js.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import reactframe from "../assets/reactframe.svg";
import taillwind from "../assets/taillwind.svg";
import git from "../assets/git.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import figma from "../assets/figma.svg";
import sql from "../assets/sql.svg";
import c from "../assets/c.svg";


export default function Stack() {
  return (
    <section className="stack">
      <img src={decor} alt="Decoration" className="decorative-image" />
      <h2 className="section-title">My Stack</h2>

      <div className="stack-icons">
        <div className="first-row">
          <img src={js} alt="JS" />
          <img src={css} alt="CSS" />
          <img src={python} alt="Python" />
          <img src={c} alt="C Language" />
        </div>
        <div className="second-row">
          <img src={html} alt="HTML" />
          <img src={figma} alt="Figma" />
          <img src={java} alt="Java" />
        </div>
        <div className="third-row">
          <img src={reactframe} alt="React" />
          <img src={taillwind} alt="Tailwind" />
          <img src={sql} alt="SQL" />
          <img src={git} alt="Git" />
        </div>
      </div>
      <br /><br /><br />
      <hr className="divider" />
      <div class="ticker-wrapper">
  <div class="ticker">
    <div class="item">HTML</div>
    <div class="item">CSS</div>
    <div class="item">JavaScript</div>
    <div class="item">Python</div>
    <div class="item">C Language</div>
    <div class="item">Figma</div>
    <div class="item">React</div>
    <div class="item">Tailwind</div>
    <div class="item">Java</div>
    <div class="item">SQL</div>
    <div class="item">HTML</div>
    <div class="item">CSS</div>
    <div class="item">JavaScript</div>
    <div class="item">Python</div>
    <div class="item">C Language</div>
    <div class="item">Figma</div>
    <div class="item">React</div>
    <div class="item">Tailwind</div>
    <div class="item">Java</div>
    <div class="item">SQL</div>
  </div>
</div>
      <hr className="divider" />
    </section>
  );
}
