import { experience } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="xp">
      <SectionHeading title="Experience" index="2021 → present" />

      <ol className="xp__list">
        {experience.map((role, index) => (
          <li className="xp__item" key={`${role.role}-${role.period}`}>
            <div className="xp__rail">
              <span className={`xp__node ${role.current ? "is-current" : ""}`} />
              {index < experience.length - 1 && <span className="xp__line" />}
            </div>

            <div className="xp__content">
              <div className="xp__meta">
                <h3>{role.role}</h3>
                <span className="xp__period">{role.period}</span>
              </div>
              <p className="xp__org">
                {role.company} — {role.location}
                {role.current && <span className="xp__badge">current</span>}
              </p>
              <ul className="xp__points">
                {role.points.map((point) => (
                  <li key={`${role.role}-${point}`}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
