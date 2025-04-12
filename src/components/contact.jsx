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
      placeholder: "Send me a message",
    },
  ];
  return (
    <section id="contact">
      <h2>contact me.</h2>
      <form>
        {formFields.map((ff, key) => (
          <label key={key} htmlFor={ff.id}>
            {ff.label}{" "}
            {ff.type === "textarea" ? (
              <textarea
                name={ff.id}
                id={ff.id}
                placeholder={ff.placeholder}
                rows={5}
              ></textarea>
            ) : (
              <input
                type={ff.type}
                name={ff.id}
                id={ff.id}
                placeholder={ff.placeholder}
              />
            )}
          </label>
        ))}
      </form>
    </section>
  );
}
