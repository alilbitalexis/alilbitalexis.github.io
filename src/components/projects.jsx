// Data
import { projects } from "../data/projects";
import Badge from "./badge";

export default function Projects() {
  return (
    <section id="projects">
      <h2>project work.</h2>
      <article className="projects-grid">
        {projects
          .filter((p) => p.active)
          .map((p, key) => (
            <div key={key} className="projects-card">
              <a href={p.url} target="_blank">
                <div className="img-container">
                  <img src={p.image} alt="" />
                  <h6>{p.type === 1 ? "commissioned work" : "side project"}</h6>
                </div>
              </a>
              <h4>{p.name}</h4>
              <div className="description">{p.description}</div>
              <div className="languages">
                {p.languages.map((l, lKey) => (
                  <Badge icon={false} lang={l} key={lKey} />
                ))}
              </div>
              <div className="buttons">
                {p.githubUrl && (
                  <a className="button" href={p.githubUrl} target="_blank">
                    GitHub
                  </a>
                )}
                <a className="button" href={p.url} target="_blank">
                  View Site
                </a>
              </div>
            </div>
          ))}
      </article>
    </section>
  );
}
