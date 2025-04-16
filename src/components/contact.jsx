export default function Contact() {
  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Jane Doe",
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "janedoe@email.com",
    },
    {
      id: "desc",
      label: "Description",
      type: "textarea",
      placeholder: "How can I help?",
    },
  ];
  return (
    <section id="contact">
      <h2>contact me.</h2>
      <form>
        <p>
          Want to hire me for a project? Are you a recruiter looking for a developer? Just feel like discussing your favorite movie? Send me a message here to get in touch, or reach out via email at{" "}
          <a href="mailto:alexise72523@gmail.com">alexise72523@gmail.com</a>.
        </p>
        {formFields.map((ff, key) => (
          <label key={key} htmlFor={ff.id}>
            {ff.label}{" "}
            {ff.type === "textarea" ? (
              <textarea name={ff.id} id={ff.id} placeholder={ff.placeholder} rows={5}></textarea>
            ) : (
              <input type={ff.type} name={ff.id} id={ff.id} placeholder={ff.placeholder} />
            )}
          </label>
        ))}
      </form>
    </section>
  );
}
