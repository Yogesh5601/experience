import ContactUs from "@/views/Contact";
import Hero from "@/views/Hero";
import Projects from "@/views/Projects";
import Resume from "@/views/Resume";
import ServiceList from "@/views/ServiceLists";
import Skills from "@/views/Skills";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <ServiceList/>
      <Projects />
      <Resume />
      <Skills />
      <ContactUs />
    </div>
  );
}
