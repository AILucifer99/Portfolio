import { hero, profile } from "../data/content.js";
import RetrievalDemo from "./RetrievalDemo.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">{profile.title} — {profile.tagline}</span>
          <h1 className="hero__headline">{hero.headline}</h1>
          <p className="hero__subhead">{hero.subhead}</p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#contact">
              Start a conversation
            </a>
            <a className="btn btn-ghost" href="#projects">
              See the work
            </a>
          </div>
          <div className="hero__location">
            <span className="hero__pulse" aria-hidden="true" />
            {profile.location} · open to select engagements
          </div>
        </div>

        <RetrievalDemo />
      </div>
    </section>
  );
}
