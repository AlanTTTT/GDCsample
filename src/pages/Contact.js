import React, { Suspense } from "react";
import "../i18n";
import Header from '../components/header';
import ContactBanner from '../components/contactBanner';
import News from '../components/news';
import Footer from '../components/footer';

const ContactC = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Header />
        <ContactBanner />
        <News />
        <Footer />
      </Suspense>
    </div>
  )
}

export default ContactC