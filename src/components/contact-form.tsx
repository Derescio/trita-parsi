"use client";

import { FormEvent, useState, type ReactNode } from "react";
import type { ContactTopic } from "@/.utils/types";

const TOPICS: ContactTopic[] = ["press", "speaking", "other"];

function topicLabel(topic: ContactTopic): string {
  switch (topic) {
    case "press":
      return "Press";
    case "speaking":
      return "Speaking";
    case "other":
      return "Other";
    default: {
      const _exhaustive: never = topic;
      return _exhaustive;
    }
  }
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<ContactTopic>("press");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim() && email.trim() && message.trim()) setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-gold bg-gold/8 px-7 py-10">
        <div className="font-display text-navy mb-2.5 text-[28px] font-semibold">
          Message received.
        </div>
        <p className="text-[16px] leading-7 text-ink">
          Thank you, {name}. We’ll be in touch at {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="contact-name">
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
          />
        </Field>
        <Field label="Email" htmlFor="contact-email">
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
          />
        </Field>
      </div>
      <fieldset>
        <legend className="mb-3 text-[11.5px] font-bold tracking-[0.16em] text-muted uppercase">
          Topic
        </legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((item) => {
            const active = topic === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setTopic(item)}
                className={
                  active
                    ? "cursor-pointer bg-navy px-4 py-2.5 text-[12px] font-bold tracking-[0.12em] text-paper uppercase"
                    : "cursor-pointer border border-line bg-white px-4 py-2.5 text-[12px] font-bold tracking-[0.12em] text-navy uppercase hover:border-navy"
                }
              >
                {topicLabel(item)}
              </button>
            );
          })}
        </div>
      </fieldset>
      <Field label="Message" htmlFor="contact-message">
        <textarea
          id="contact-message"
          required
          rows={7}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </Field>
      <button
        type="submit"
        className="cursor-pointer self-start bg-burgundy px-8 py-4 text-[12.5px] font-bold tracking-[0.14em] text-paper uppercase hover:bg-burgundy-dark"
      >
        Send message
      </button>
    </form>
  );
}

const fieldClass =
  "w-full border border-line bg-white px-4 py-3.5 font-sans text-[15.5px] text-ink outline-none focus:border-gold";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2.5 block text-[11.5px] font-bold tracking-[0.16em] text-muted uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
