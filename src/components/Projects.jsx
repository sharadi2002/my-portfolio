import { projects } from "../data";
import { Section, Tag, Img, Button } from "./ui";

function List({ title, items }) {
  return (
    <div>
      <h4 className="mb-3 font-medium">{title}</h4>
      <ul className="list-disc space-y-2 pl-5 text-mute marker:text-brown">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

function CaseStudy({ p }) {
  return (
    <article className="border-t border-beige pt-10 first:border-0 first:pt-0">
      <h3 className="font-serif text-3xl">{p.name}</h3>
      <p className="mt-2 text-brown">My role: {p.role}</p>
      <p className="mt-4 max-w-2xl text-mute">{p.summary}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {p.screenshots.map((s) => (
          <figure key={s.src}>
            <Img src={s.src} alt={`${p.name}: ${s.label}`} label={`Add screenshot at public${s.src}`} className="aspect-video w-full rounded-lg" />
            <figcaption className="mt-2 text-sm text-mute">{s.label}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <List title="Objectives" items={p.objectives} />
        <List title="My responsibilities" items={p.responsibilities} />
        <div>
          <h4 className="mb-3 font-medium">Technologies used</h4>
          <div className="flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </div>
      </div>

      {(p.links.repo || p.links.demo) && (
        <div className="mt-8 flex gap-3">
          {p.links.repo && <Button href={p.links.repo} variant="outline" target="_blank" rel="noreferrer">View code</Button>}
          {p.links.demo && <Button href={p.links.demo} variant="outline" target="_blank" rel="noreferrer">Live demo</Button>}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects and case studies">
      <div className="space-y-16">{projects.map((p) => <CaseStudy key={p.slug} p={p} />)}</div>
    </Section>
  );
}
