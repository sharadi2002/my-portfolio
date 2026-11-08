import { about, education, skills, profile } from "../data";
import { Section, Tag } from "./ui";

export function About() {
  return (
    <Section id="about" title="Where business meets technology" tone="sand">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-5 font-serif text-lg leading-relaxed">
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-medium">Interests</h3>
            <div className="flex flex-wrap gap-2">{about.interests.map((i) => <Tag key={i}>{i}</Tag>)}</div>
          </div>
          <div>
            <h3 className="mb-3 font-medium">Career goals</h3>
            <p className="leading-relaxed text-mute">{about.goals}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((e) => (
        <article key={e.degree} className="grid gap-4 border-t border-beige pt-8 md:grid-cols-[1fr_2fr]">
          <p className="text-mute">{e.period}</p>
          <div>
            <h3 className="font-serif text-2xl">{e.degree}</h3>
            <p className="mt-1 text-brown">{e.school}</p>
            <p className="mt-4 text-mute">{e.notes}</p>
          </div>
        </article>
      ))}
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills" tone="sand">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="border-t border-beige pt-5">
            <h3 className="mb-4 font-serif text-xl">{g.group}</h3>
            <ul className="space-y-2 text-mute">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}



export function Contact() {
  const { linkedin, github, email } = profile.links;
  const items = [
    ["LinkedIn", linkedin, linkedin],
    ["GitHub", github, github],
    ["Email", `mailto:${email}`, email],
  ];
  return (
    <Section id="contact" title="Let's talk about internships" tone="sand">
      <ul className="grid gap-6 sm:grid-cols-3">
        {items.map(([label, href, text]) => (
          <li key={label} className="border-t border-brown/40 pt-4">
            <p className="text-sm text-mute">{label}</p>
            <a href={href} target="_blank" rel="noreferrer" className="break-all font-serif text-lg transition-colors hover:text-brown">{text}</a>
          </li>
        ))}
      </ul>
      <footer className="mt-20 text-sm text-mute">© {new Date().getFullYear()} {profile.name}</footer>
    </Section>
  );
}
