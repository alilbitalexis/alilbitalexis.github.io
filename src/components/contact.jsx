export default function Contact() {
  const formFields = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
    },
    {
      id: "desc",
      label: "Description",
      type: "textarea",
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
              <textarea name={ff.id} id={ff.id}></textarea>
            ) : (
              <input type={ff.type} name={ff.id} id={ff.id} />
            )}
          </label>
        ))}
      </form>
    </section>
  );
}
