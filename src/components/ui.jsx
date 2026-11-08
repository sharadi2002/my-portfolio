import { useState } from "react";

export function Section({ id, title, tone = "paper", children }) {
  return (
    <section id={id} className={`${tone === "sand" ? "bg-sand" : "bg-paper"} py-20 md:py-28`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 max-w-xl font-serif text-4xl font-light tracking-tight md:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

// Shows the image if it exists, otherwise a clear placeholder.
export function Img({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className={`flex items-center justify-center border border-dashed border-beige bg-sand p-4 text-center text-sm text-mute ${className}`}>
        {label}
      </div>
    );
  return <img src={src} alt={alt} onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}

export function Button({ href, children, variant = "solid", ...rest }) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-brown"
      : "border border-ink/30 text-ink hover:border-brown hover:text-brown";
  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {children}
    </a>
  );
}

export function Tag({ children }) {
  return <span className="rounded-full bg-sand px-3 py-1 text-sm text-ink">{children}</span>;
}
