// Data
import { projects } from "../data/projects";
import Badge from "./badge";

export default function Projects() {
  return (
    <section id="projects">
      <h2>project work.</h2>
      {projects
        .filter((p) => p.active)
        .map((p, key) => (
          <article key={key}>
            <img src={p.image} alt="" />
            <h3>{p.name}</h3>
            <div className="description">{p.description}</div>
            <div className="languages">
              {p.languages.map((l, lKey) => (
                <Badge icon={false} lang={l} key={lKey} />
              ))}
            </div>
            <div className="buttons">
              {p.githubUrl && <a href={p.githubUrl}>GitHub</a>}
              <a href={p.url}>View Site</a>
            </div>
          </article>
        ))}
    </section>
  );
}
