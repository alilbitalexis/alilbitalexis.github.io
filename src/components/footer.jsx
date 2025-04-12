// Data
import { links } from "../data/config";

export default function Footer() {
  const date = new Date();
  return (
    <footer>
      <div className="footer-row">
        <div className="copyright">©{date.getFullYear()} Alexis Elliott</div>
        <nav className="menu">
          {links.map((l, key) => (
            <a key={key} onClick={(e) => scrollTo(e, l.id)} href="">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-row">
        Developed by Alexis Elliott. Source code repository:{" "}
        <a href="https://github.com/alilbitalexis/alilbitalexis.github.io">
          GitHub
        </a>
      </div>
    </footer>
  );
}
