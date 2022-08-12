import Contact from "../components/Contact";
import Hero from "../components/Hero";

function contact() {
  return (
    <div>
      <Hero heading="Contact me!" message="Submit your message below." />
      <Contact />
    </div>
  );
}

export default contact;
