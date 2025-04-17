// Data
import { useState } from "react";
import { links } from "../data/config";
import Nav from "./nav";

export default function Header() {
  const [active, setActive] = useState(false);

  function scrollTo(e, id) {
    e.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function menuClick() {
    setActive(!active);
  }

  // For mobile: two areas/columns: social and menu
  return (
    <header>
      <div className="logo" onClick={(e) => scrollTo(e, "root")}>
        <img src="./images/avatar.png" alt="" /> Alexis Elliott
      </div>
      <Nav mobile={active} setMobile={setActive} />
      <div className={`mobile-menu-icon${active ? " active" : ""}`} onClick={menuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
