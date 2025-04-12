// Data
import { links } from "../data/config";

export default function Header() {
  function scrollTo(e, id) {
    e.preventDefault();
    document
      .querySelector(`#${id}`)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <header>
      <div className="logo">Alexis Elliott</div>
      <nav>
        {links.map((l, key) => (
          <a key={key} onClick={(e) => scrollTo(e, l.id)} href="">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
