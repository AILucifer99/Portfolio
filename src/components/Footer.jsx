import { profile } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="shell site-footer__row">
        <span>© {year} {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
