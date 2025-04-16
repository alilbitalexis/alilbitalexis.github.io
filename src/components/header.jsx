// Data
import { links } from "../data/config";

export default function Header() {
  function scrollTo(e, id) {
    e.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // For mobile: two areas/columns: social and menu
  return (
    <header>
      <div className="logo" onClick={(e) => scrollTo(e, "root")}>
        <img src="./images/avatar.png" alt="" /> Alexis Elliott
      </div>
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
