import React from 'react';
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';
  
const Product = () => {

  const { t } = useTranslation();

  return (
    <section id="product" class="featured featured-2 featured-3 featured-left bg-dark3 pt-0 pb-0 product2">
        <div className="container-fluid pr-0 pl-0">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-content productText">
              <div className="heading wow fadeInUp" data-wow-delay="100ms">
                <h2 className="heading--title color-white">{t("GDC")}</h2>
                <p className="heading--desc color-white" style={{paddingBottom: "30px"}}>{t("Your Demands, Our Commitment")}</p>
                <Button variant="outline-light" href="/About" size="lg" style={{placeItems: "center",display: "inline-grid"}}>About us!</Button>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 pr-0">
                <img src="assets/images/GDC/IMG_0875.JPG" alt="banner img" className="banner--img" />
            </div>
          
          </div>
      </div>  
    </section>
  )
}

export default Product;