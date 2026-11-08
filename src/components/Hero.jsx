import { profile } from "../data";
import { Button, Img } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div>
          <p className="rise mb-6 text-mute" style={{ animationDelay: "0s" }}>{profile.title}</p>
          <h1 className="rise font-serif text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl" style={{ animationDelay: ".1s" }}>
            Sachini
            <br />
            <span className="italic text-brown">Sharadi</span>
          </h1>
          <p className="rise mt-8 max-w-md text-lg leading-relaxed text-mute" style={{ animationDelay: ".25s" }}>
            {profile.intro}
          </p>
          <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".4s" }}>
            <Button href={profile.cv} download>Download CV</Button>
            <Button href="#contact" variant="outline">Get in touch</Button>
          </div>
        </div>
        <div className="arch-in mx-auto w-full max-w-sm overflow-hidden rounded-t-full bg-sand">
          <Img src={profile.photo} alt={`Portrait of ${profile.name}`} label="Add your photo at public/photo.jpg" className="aspect-[3/4] w-full" />
        </div>
      </div>
    </section>
  );
}
