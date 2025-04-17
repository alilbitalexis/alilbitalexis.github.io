// Data
import { links } from "../data/config";
import Nav from "./nav";

export default function Footer() {
  const date = new Date();
  return (
    <footer>
      {/* <div className="footer-row"> */}
      <div className="copyright">
        ©{date.getFullYear()}{" "}
        <a href="https://github.com/alilbitalexis" target="_blank">
          Alexis Elliott
        </a>
        . Code repository on <a href="https://github.com/alilbitalexis/alilbitalexis.github.io">GitHub</a>.
      </div>
      <Nav />
    </footer>
  );
}
