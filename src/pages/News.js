import React, { Suspense } from "react";
import "../i18n";
import Header from '../components/header';
import NewsBanner from '../components/newsBanner';
import NewsDetails from '../components/newsDetails';
import Footer from '../components/footer';

const CareerC = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Header />
        <NewsBanner />
        <NewsDetails />
        <Footer />
      </Suspense>
    </div>
  )
}

export default CareerC