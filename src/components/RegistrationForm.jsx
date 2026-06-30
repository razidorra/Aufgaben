import { useState } from "react";
import { useForm } from "@tanstack/react-form";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "",
  newsletter: false,
  notes: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d\s/-]+$/;

function getFieldError(field) {
  return field.state.meta.errors.filter(Boolean).join(" ");
}

function TextInput({ field, label, type = "text", placeholder }) {
  const error = getFieldError(field);
  const hasError = Boolean(error);
  const errorId = `${field.name}-error`;

  return (
    <label className="form-field">
      <span>{label}</span>
      <input
        className={hasError ? "input-error" : ""}
        type={type}
        value={field.state.value}
        placeholder={placeholder}
        onBlur={field.handleBlur}
        onChange={(event) => field.handleChange(event.target.value)}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
      />
      {hasError && (
        <p className="field-error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </label>
  );
}

export default function RegistrationForm() {
  const [submittedData, setSubmittedData] = useState(null);

  const form = useForm({
    defaultValues: initialValues,
    onSubmit: ({ value }) => {
      console.log(value);
      setSubmittedData(value);
      form.reset();
    },
  });

  return (
    <main className="page-shell">
      <section className="form-panel" aria-labelledby="registration-title">
        <div className="form-heading">
          <p className="eyebrow">React 19 + TanStack Form</p>
          <h1 id="registration-title">Seminar-Anmeldung</h1>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            form.handleSubmit();
          }}
          noValidate
        >
          <div className="field-grid">
            <form.Field
              name="firstName"
              validators={{
                onBlur: ({ value }) => {
                  if (!value.trim()) return "Bitte gib deinen Vornamen ein.";
                  if (value.trim().length < 2) {
                    return "Der Vorname muss mindestens 2 Zeichen lang sein.";
                  }
                  return undefined;
                },
                onSubmit: ({ value }) => {
                  if (!value.trim()) return "Bitte gib deinen Vornamen ein.";
                  if (value.trim().length < 2) {
                    return "Der Vorname muss mindestens 2 Zeichen lang sein.";
                  }
                  return undefined;
                },
              }}
            >
              {(field) => (
                <TextInput
                  field={field}
                  label="Vorname"
                  placeholder="Vorname"
                />
              )}
            </form.Field>

            <form.Field
              name="lastName"
              validators={{
                onBlur: ({ value }) => {
                  if (!value.trim()) return "Bitte gib deinen Nachnamen ein.";
                  if (value.trim().length < 2) {
                    return "Der Nachname muss mindestens 2 Zeichen lang sein.";
                  }
                  return undefined;
                },
                onSubmit: ({ value }) => {
                  if (!value.trim()) return "Bitte gib deinen Nachnamen ein.";
                  if (value.trim().length < 2) {
                    return "Der Nachname muss mindestens 2 Zeichen lang sein.";
                  }
                  return undefined;
                },
              }}
            >
              {(field) => (
                <TextInput
                  field={field}
                  label="Nachname"
                  placeholder="Nachname"
                />
              )}
            </form.Field>

            <form.Field
              name="email"
              validators={{
                onBlur: ({ value }) => {
                  if (!value.trim()) {
                    return "Bitte gib deine E-Mail-Adresse ein.";
                  }
                  if (!emailPattern.test(value)) {
                    return "Bitte gib eine gültige E-Mail-Adresse ein.";
                  }
                  return undefined;
                },
                onSubmit: ({ value }) => {
                  if (!value.trim()) {
                    return "Bitte gib deine E-Mail-Adresse ein.";
                  }
                  if (!emailPattern.test(value)) {
                    return "Bitte gib eine gültige E-Mail-Adresse ein.";
                  }
                  return undefined;
                },
              }}
            >
              {(field) => (
                <TextInput
                  field={field}
                  label="E-Mail"
                  type="email"
                  placeholder="Gib deine E-Mail ein"
                />
              )}
            </form.Field>

            <form.Field
              name="phone"
              validators={{
                onBlur: ({ value }) => {
                  if (!value.trim()) return undefined;
                  if (value.trim().length < 7) {
                    return "Die Telefonnummer muss mindestens 7 Zeichen lang sein.";
                  }
                  if (!phonePattern.test(value)) {
                    return "Bitte nutze nur Ziffern, Leerzeichen, +, /, - oder Klammern.";
                  }
                  return undefined;
                },
                onSubmit: ({ value }) => {
                  if (!value.trim()) return undefined;
                  if (value.trim().length < 7) {
                    return "Die Telefonnummer muss mindestens 7 Zeichen lang sein.";
                  }
                  if (!phonePattern.test(value)) {
                    return "Bitte nutze nur Ziffern, Leerzeichen, +, /, - oder Klammern.";
                  }
                  return undefined;
                },
              }}
            >
              {(field) => (
                <TextInput
                  field={field}
                  label="Telefonnummer"
                  type="tel"
                  placeholder="Gib deine Telefonnummer ein"
                />
              )}
            </form.Field>

            <form.Field
              name="role"
              validators={{
                onBlur: ({ value }) =>
                  value.trim() ? undefined : "Bitte gib deine Rolle oder deinen Beruf ein.",
                onSubmit: ({ value }) =>
                  value.trim() ? undefined : "Bitte gib deine Rolle oder deinen Beruf ein.",
              }}
            >
              {(field) => (
                <TextInput
                  field={field}
                  label="Rolle oder Beruf"
                  placeholder="Dein Beruf"
                />
              )}
            </form.Field>

            <form.Field
              name="newsletter"
            >
              {(field) => (
                <label className="checkbox-field">
                  <input
                    type="checkbox"
                    checked={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.checked)}
                  />
                  <span>Newsletter abonnieren</span>
                </label>
              )}
            </form.Field>
          </div>

          <form.Field
            name="notes"
            validators={{
              onBlur: ({ value }) => {
                if (value.length > 200) {
                  return "Die Anmerkung darf maximal 200 Zeichen lang sein.";
                }
                if (value.length > 0 && !value.trim()) {
                  return "Die Anmerkung darf nicht nur aus Leerzeichen bestehen.";
                }
                return undefined;
              },
              onSubmit: ({ value }) => {
                if (value.length > 200) {
                  return "Die Anmerkung darf maximal 200 Zeichen lang sein.";
                }
                if (value.length > 0 && !value.trim()) {
                  return "Die Anmerkung darf nicht nur aus Leerzeichen bestehen.";
                }
                return undefined;
              },
            }}
          >
            {(field) => {
              const error = getFieldError(field);
              const hasError = Boolean(error);

              return (
                <label className="form-field notes-field">
                  <span>Anmerkungen</span>
                  <textarea
                    className={hasError ? "input-error" : ""}
                    value={field.state.value}
                    maxLength={240}
                    placeholder="Gibt es etwas, das wir vorab wissen sollten?"
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    aria-invalid={hasError}
                    aria-describedby={hasError ? "notes-error" : "notes-count"}
                  />
                  <span className="character-count" id="notes-count">
                    {field.state.value.length}/200 Zeichen
                  </span>
                  {hasError && (
                    <p className="field-error" id="notes-error" role="alert">
                      {error}
                    </p>
                  )}
                </label>
              );
            }}
          </form.Field>

          <button className="submit-button" type="submit">
            Absenden
          </button>
        </form>
      </section>

      {submittedData && (
        <section className="summary-panel" aria-labelledby="summary-title">
          <h2 id="summary-title">Letzte erfolgreiche Anmeldung</h2>
          <dl>
            <div>
              <dt>Vorname</dt>
              <dd>{submittedData.firstName}</dd>
            </div>
            <div>
              <dt>Nachname</dt>
              <dd>{submittedData.lastName}</dd>
            </div>
            <div>
              <dt>E-Mail</dt>
              <dd>{submittedData.email}</dd>
            </div>
            <div>
              <dt>Telefonnummer</dt>
              <dd>{submittedData.phone || "Nicht angegeben"}</dd>
            </div>
            <div>
              <dt>Rolle oder Beruf</dt>
              <dd>{submittedData.role}</dd>
            </div>
            <div>
              <dt>Newsletter</dt>
              <dd>{submittedData.newsletter ? "Ja" : "Nein"}</dd>
            </div>
            <div className="summary-notes">
              <dt>Anmerkungen</dt>
              <dd>{submittedData.notes || "Keine Anmerkungen"}</dd>
            </div>
          </dl>
        </section>
      )}
    </main>
  );
}
