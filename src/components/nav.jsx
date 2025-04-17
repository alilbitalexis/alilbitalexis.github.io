// Data
import { useState } from "react";
import { links } from "../data/config";

export default function Nav({ mobile, setMobile }) {
  function scrollTo(e, id) {
    e.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth", block: "start" });
    if (mobile) {
      setMobile(false);
    }
  }

  // For mobile: two areas/columns: social and menu
  return (
    <nav className={mobile ? "mobile" : ""}>
      {mobile && <h4>Menu</h4>}
      {links.map((l, key) => (
        <a key={key} onClick={(e) => scrollTo(e, l.id)} href="">
          {l.label}
        </a>
      ))}
      {mobile && <h4>Social</h4>}
    </nav>
  );
}
