// Data
import { languages } from "../data/resume.jsx";
import Badge from "./badge";

export default function About() {
  const techCategories = [
    {
      id: "frontend",
      label: "Front-end",
    },
    {
      id: "database",
      label: "Data",
    },
    {
      id: "tools",
      label: "Tools",
    },
  ];
  return (
    <section id="about">
      <h2>about me.</h2>
      {/* Fill in with real information later */}
      <p>
        In 8th grade, I took an advanced keyboarding class with a partial focus on website building. From my first html tag through becoming a supporter/advocate/promoter for external stylesheets over
        inline, I immediately fell in love with web design and development, and I continued exploring my love throughout high school and eventually into college.
      </p>
      <p>
        After college, I was lucky enough to fuse my job as a technical writer into a part-time application developer on our team, building frontends of apps that assisted our contact center agents
        during calls with clients. A few years later, I was promoted into a full-time software development team where I continued building my experience by shifting into a ReactJS-focused role which
        included becoming experienced with SQL data management and script writing.
      </p>
      <p>
        I am proud of my rise from a contact center agent to a five-year frontend developer that took place over a 15-year period of professional development. My passion remains in frontend
        development, specifically around web design, functionality, and user experience.
      </p>
      <p>
        In the life side of my work/life balance, I am now an avid reader after a few decades of forgetting books existed. I am also venturing into creative writing, a growing passion. Outside of the
        literary arts, I enjoy a video game here and there (on the easier modes), and I love going to the movies still.
      </p>
      <h3>Languages and Tools</h3>
      {techCategories.map((tc, key) => (
        <article key={key}>
          <h4>{tc.label}</h4>
          <div className="languages">
            {languages
              .filter((l) => l.category === tc.id)
              .map((l, lKey) => (
                <Badge key={lKey} icon={l.icon} lang={l.label} />
              ))}
          </div>
        </article>
      ))}
    </section>
  );
}
