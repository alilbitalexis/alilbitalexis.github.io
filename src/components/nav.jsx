// Data
import { links } from "../data/config";

export default function Nav() {
  function scrollTo(e, id) {
    e.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // For mobile: two areas/columns: social and menu
  return (
    <nav>
      {links.map((l, key) => (
        <a key={key} onClick={(e) => scrollTo(e, l.id)} href="">
          {l.label}
        </a>
      ))}
    </nav>
  );
}
