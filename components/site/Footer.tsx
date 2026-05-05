export function Footer() {
  return (
    <footer className="mt-10 border-t border-border py-10 text-center text-sm text-muted-foreground">
      <p>
        Créé par{" "}
        <a
          href="https://github.com/MikeCHOKKI"
          target="_blank"
          rel="noreferrer"
          className="text-foreground transition-colors hover:text-cyan-glow"
        >
          @Ekim&apos;s
        </a>
        {" · "}
        <a
          href="https://www.linkedin.com/in/mikechokki"
          target="_blank"
          rel="noreferrer"
          className="text-foreground transition-colors hover:text-cyan-glow"
        >
          LinkedIn
        </a>
        {" · "}
        <a
          href="mailto:mikechokki5@gmail.com"
          className="text-foreground transition-colors hover:text-cyan-glow"
        >
          mikechokki5@gmail.com
        </a>
      </p>
      <p className="mt-2 text-xs">
        Licence Apache 2.0 ·{" "}
        <a
          href="https://github.com/MikeCHOKKI/lfa-cli-ai"
          target="_blank"
          rel="noreferrer"
          className="text-foreground hover:text-cyan-glow"
        >
          lfa-cli-ai
        </a>
      </p>
    </footer>
  );
}