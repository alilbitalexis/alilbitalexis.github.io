// Data
import { resume } from "../data/resume";

export default function Resume() {
  return (
    <section id="resume">
      <h2>resume.</h2>
      <article>
        <h4>Work Experience</h4>
        {resume.experiences.map((ex, key) => (
          <div key={key} className="experience">
            <h5>{ex.title}</h5>
            <h6>
              {ex.company}
              <span className="timeframe">{ex.timeframe}</span>
            </h6>
            <ul>
              {ex.description.map((d, dKey) => (
                <li key={dKey}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </article>
      <article>
        <h4>Education</h4>
        {resume.educations.map((ed, key) => (
          <div key={key} className="education">
            <h5>{ed.name}</h5>
            <h6>
              {ed.institution} | {ed.location}
              <span className="timeframe">{ed.timeframe}</span>
            </h6>
            <p>{ed.description}</p>
            {ed.online && <p>Online</p>}
          </div>
        ))}
      </article>
    </section>
  );
}
