import { skills } from "../data/content.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-head">
        <h2>Core competencies</h2>
      </div>

      <div className="skills__grid">
        {skills.map((group) => (
          <div className="skills__group" key={group.group}>
            <h3>{group.group}</h3>
            <div className="skills__chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
