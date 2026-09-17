import { education, awards, languages } from "../data/content.js";
import "./Credentials.css";

export default function Credentials() {
  return (
    <section id="credentials" className="credentials">
      <div className="section-head">
        <h2>Education & credentials</h2>
      </div>

      <div className="credentials__grid">
        <div className="credentials__col">
          <h3>Education</h3>
          <ul className="credentials__edu">
            {education.map((e) => (
              <li key={e.degree}>
                <div className="credentials__eduTop">
                  <span className="credentials__degree">{e.degree}</span>
                  <span className="credentials__period">{e.period}</span>
                </div>
                <span className="credentials__inst">{e.institution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="credentials__col">
          <h3>Awards</h3>
          <ul className="credentials__awards">
            {awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <h3 className="credentials__langHead">Languages</h3>
          <ul className="credentials__langs">
            {languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                <span className="credentials__langLevel">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
