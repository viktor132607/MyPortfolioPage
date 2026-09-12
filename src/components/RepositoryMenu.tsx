type RepositoryMenuProps = {
  clientUrl?: string;
  serverUrl?: string;
};

export function RepositoryMenu({ clientUrl, serverUrl }: RepositoryMenuProps) {
  if (!clientUrl) return null;

  if (!serverUrl) {
    return (
      <a
        href={clientUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-ink dark:hover:text-white"
      >
        Open repository
      </a>
    );
  }

  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none transition hover:text-ink dark:hover:text-white [&::-webkit-details-marker]:hidden">
        Open repository
      </summary>

      <div className="absolute bottom-full right-0 z-30 mb-2 min-w-40 overflow-hidden rounded-xl border border-line bg-white p-1.5 text-sm font-semibold text-ink shadow-xl dark:border-cyan-900/60 dark:bg-slate-950 dark:text-white">
        <a
          href={clientUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg px-4 py-2.5 transition hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          Client
        </a>
        <a
          href={serverUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg px-4 py-2.5 transition hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          Server
        </a>
      </div>
    </details>
  );
}
