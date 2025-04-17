import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

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
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "How can I help?",
    },
  ];

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailJs
      .sendForm("portfolio_service", "contact_form", form.current, {
        publicKey: "P_XdfV4rdq31BlAV9",
      })
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          setTimeout(() => {
            setStatus("");
          }, 5000);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          setTimeout(() => {
            setStatus("");
          }, 5000);
          form.current.reset();
        }
      );
  }
  return (
    <section id="contact">
      <h2>contact me.</h2>
      <form ref={form} onSubmit={sendEmail}>
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
        {status === "success" ? <p>Message sent!</p> : status === "error" ? <p>Something went wrong. Please try again.</p> : null}
        {status === "" && (
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        )}
      </form>
    </section>
  );
}
