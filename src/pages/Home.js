import React, { Suspense } from "react";
import "../i18n";
import Header from '../components/header';
import Product from '../冇用/product';
import Product1 from '../冇用/product1';
import Product2 from '../冇用/product2';
import Footer from '../components/footer';



const Home = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Header/>
        <Product class='product'/>
        <Product1 />
        <Product2 />
        <Footer />
      </Suspense>  
    </div>
  )
}

export default Home