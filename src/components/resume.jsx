// Data
import { resume } from "../data/resume";

export default function Resume() {
  return (
    <section id="resume">
      <h2>resume.</h2>
      <article>
        {resume.experiences.map((ex, key) => (
          <div key={key} className="experience">
            <h4>{ex.title}</h4>
            <h5>{ex.company}</h5>
            <h6>{ex.timeframe}</h6>
            <ul>
              {ex.description.map((d, dKey) => (
                <li key={dKey}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </article>
      <article>
        {resume.educations.map((ed, key) => (
          <div key={key} className="education">
            <h4>{ed.name}</h4>
            <h5>
              {ed.institution} {ed.location}
            </h5>
            <h6>{ed.timeframe}</h6>
            <p>{ed.description}</p>
            {ed.online && <p>Online</p>}
          </div>
        ))}
      </article>
    </section>
  );
}
