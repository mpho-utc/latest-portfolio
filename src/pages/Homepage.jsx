
import Header from "../assets/components/shared/header";
import Footer from "../assets/components/shared/footer";
import Hero from "../assets/components/unique/hero";
// import Container from "../assets/components/shared/container";
import About from "../assets/components/unique/aboutMeHome";
import WhatIDo from "../assets/components/unique/whatIDo";
import ProjectsOverview from "../assets/components/shared/projects";
import Contacts from "../assets/components/shared/contacts";
import { ContactFormProvider } from "../contexts/contactContext";

export default function Homepage() {

  return (
    <>
      <Header   />
      <Hero  />
      <WhatIDo  />
      <About />
      <ProjectsOverview/>
      <ContactFormProvider>
        <Contacts/>
      </ContactFormProvider>
      <Footer/> 
    </>
  );
}
