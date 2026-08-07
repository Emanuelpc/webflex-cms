export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        
        <div>
          <p className="font-bold">
            WebFlex CMS
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Plataforma web flexible y personalizable.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} WebFlex CMS. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}