// Data
import { links, socialLinks } from "../data/config";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";

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
      {mobile && (
        <>
          <h4>Social</h4>
          {socialLinks.map((sl, key) => (
            <a key={key} href={sl.url} target="_blank">
              <Icon icon={sl.icon} size="xl" color={sl.color} />
            </a>
          ))}
        </>
      )}
    </nav>
  );
}
