"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Mensaje enviado correctamente.");
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Contacto
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Hablemos de tu proyecto
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Completa el formulario y nos pondremos en contacto contigo.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium"
          >
            Nombre
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            Correo electrónico
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium"
          >
            Mensaje
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Cuéntanos sobre tu proyecto..."
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}