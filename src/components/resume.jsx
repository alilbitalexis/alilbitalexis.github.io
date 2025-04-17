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
            <h5>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                  <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
                </svg>
                {ex.company}
              </span>
              <span className="timeframe">{ex.timeframe}</span>
            </h5>
            <h6>{ex.title}</h6>
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
            <h5>
              {ed.online ? (
                <>
                  <a href={ed.location}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                      </svg>{" "}
                      {ed.institution}
                    </span>
                    <span className="online">Online</span>
                  </a>
                </>
              ) : (
                <>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                      <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                    </svg>{" "}
                    {ed.institution}
                  </span>
                </>
              )}
              <span className="timeframe">{ed.timeframe}</span>
            </h5>
            <h6>{ed.name}</h6>
            <p>{ed.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
