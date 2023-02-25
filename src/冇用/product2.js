import React from 'react';
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';
  
const Product2 = () => {

  const { t } = useTranslation();

  return (
    <section id="product" className="featured featured-2 featured-3 featured-left bg-dark3 pt-0 pb-0">
        <div className="container-fluid pr-0 pl-0">
          <div className="row">
            <div class="col-sm-12 col-md-12 col-lg-6 col-content productText">
              <div className="heading wow fadeInUp" data-wow-delay="300ms">
                <h2 className="heading--title color-white">{t("Contact GDC")}</h2>
                <p className="heading--desc color-white" style={{paddingBottom: "30px"}}>{t("Keep Contact with GDC")}</p>
                <Button variant="outline-light" href="/Contact" size="lg" style={{placeItems: "center",display: "inline-grid"}}>Contact Us</Button>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 pr-0">
              <div className="banner--img">
                <img src="assets/images/GDC/IMG_0905.JPG" alt="banner img" className="banner--img" />
              </div>
            </div>
          
          </div>
      </div>  
    </section>
  )
}

export default Product2;