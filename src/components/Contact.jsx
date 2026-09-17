import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "../data/content.js";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link still works.
    }
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="shell contact__inner">
        <span className="eyebrow">Get in touch</span>
        <h2 className="contact__headline">
          Have a retrieval, agentic AI, or cloud GenAI problem worth solving?
        </h2>
        <p className="lede contact__lede">
          Open to consulting engagements, architecture reviews, and full-time opportunities in generative AI.
        </p>

        <div className="contact__actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email {profile.name.split(" ")[0]}
          </a>
          <button className="btn btn-ghost" onClick={copyEmail}>
            {copied ? "Copied ✓" : "Copy email address"}
          </button>
        </div>

        <div className="contact__meta">
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
