import { useRef, useState } from "react";

export default function Section2FormValidation() {
  const emailRef = useRef(null);
  const [message, setMessage] = useState("Noch nicht abgeschickt.");

  function handleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value.trim();

    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Bitte gib eine gueltige E-Mail-Adresse ein.");
      emailRef.current.focus();
      return;
    }

    setMessage(`Danke, ${email} wurde gespeichert.`);
    emailRef.current.value = "";
  }

  return (
    <section className="panel">
      <div>
        <p className="section-label">Section 2</p>
        <h2>Form Validation</h2>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label>
          E-Mail
          <input ref={emailRef} type="email" placeholder="name@example.com" />
        </label>

        <button type="submit">Pruefen</button>
      </form>

      <p className="result">{message}</p>
    </section>
  );
}
