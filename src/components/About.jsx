import { about } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <SectionHeading title="About" />

      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((paragraph, index) => (
            <p key={`${paragraph.slice(0, 20)}-${index}`}>{paragraph}</p>
          ))}
        </div>

        <dl className="about__stats">
          {about.highlights.map((highlight) => (
            <div key={highlight.label} className="about__stat">
              <dt>{highlight.value}</dt>
              <dd>{highlight.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
