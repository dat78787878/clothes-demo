import React from "react";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";

const Contact = () => {
  return (
    <Helmet>
      {}
      <Section>
        <SectionTitle>Liên hệ với chúng tôi</SectionTitle>
        <SectionBody>
          <div className="contact">
            <div className="contact__email">Email:d782000@gmail.com</div>
            <div className="contact__email">Phone:0336070307</div>
          </div>
        </SectionBody>
      </Section>
      {}
      <iframe
        class="_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7029.4384518880315!2d105.78494198003997!3d21.044073309680467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab325c9d85ff%3A0x92f275da77aa7354!2zMjM0IEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBD4buVIE5odeG6vywgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1630465021167!5m2!1svi!2sus"
        width="100%vw"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </Helmet>
  );
};

export default Contact;
