import React, { Suspense } from "react";
import "../i18n";
import Header from '../components/header';
import CareerBanner from '../components/careerBanner';
import Career from '../components/career';
import Footer from '../components/footer';

const CareerC = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Header />
        <CareerBanner />
        <Career />
        <Footer />
      </Suspense>
    </div>
  )
}

export default CareerC