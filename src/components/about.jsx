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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod nibh at pulvinar bibendum. Vestibulum et erat ornare, dignissim est id, mattis ex. Mauris varius magna urna, vitae
        rhoncus erat tincidunt a. Phasellus commodo nulla quis urna interdum, non dictum erat semper. Nullam nibh nisi, consequat vel semper in, aliquam sit amet tortor. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Nam sed porttitor eros. Suspendisse potenti. In tempor, lorem quis commodo porta, justo mauris congue dolor, vitae pharetra
        ipsum nunc ac felis.
      </p>
      <p>
        Aenean varius metus ipsum. Nam nec accumsan tortor. Suspendisse rutrum a mauris nec viverra. Sed purus mi, congue at ante eu, laoreet finibus sem. Nulla malesuada dui risus, eget sollicitudin
        nisl cursus eget. Nullam lobortis justo nisl, at sagittis odio sagittis pellentesque. Etiam et sollicitudin ligula. Nulla facilisi. Pellentesque viverra, sapien in maximus aliquam, metus lacus
        tristique enim, sed tincidunt dui ligula quis est. Duis auctor ipsum quis est aliquam bibendum. Proin eget tincidunt augue. Cras bibendum mauris sed libero egestas efficitur. Sed eget maximus
        arcu, et dictum eros. Aliquam erat volutpat. Pellentesque eleifend faucibus porta. In nibh eros, convallis a dignissim a, euismod eget arcu.
      </p>
      <p>
        Sed consectetur bibendum leo ac ornare. Morbi non malesuada orci. Sed tincidunt eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Sed porttitor, nisl quis faucibus porta, nibh risus finibus nisi, non molestie nisi metus ac velit. Sed vel mattis lectus. Suspendisse eget sagittis enim. Phasellus non ipsum tristique,
        venenatis leo et, semper ex. Duis porta mollis tellus, sit amet lobortis mi iaculis non. Morbi placerat massa orci. Morbi vel justo ut ante placerat ultricies. Sed consectetur, metus id
        venenatis aliquam, sapien mi dictum turpis, quis placerat nisl lectus in lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
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
