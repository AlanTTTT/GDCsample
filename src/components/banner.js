import React from 'react';
import { useTranslation } from "react-i18next";
import { HashLink as Link } from 'react-router-hash-link';

const Banner = () => {
  const { t } = useTranslation();

  return (
      <section id="heroBanner">
        <div className="Bholder">
            <div className="HB">
                    <div className="tp-caption b2 wow fadeInUp" data-wow-delay="200ms">
                      <div className="slide--headline">{t("Expert virtual currency solutions")}</div>
                    </div>		
                    <div className="tp-caption b3 wow fadeInUp" data-wow-delay="300ms">
                      <div className="slide--bio">{t("We are a licensed provider of virtual currency exchange and wallet services in Estonia. We offer secure and convenient solutions for buying and selling virtual currencies, as well as storing and managing them.")}</div>
                    </div>
                    <div className="tp-caption">
                    <div className="slide-action b4 wow fadeInUp" data-wow-delay="400ms">
                        <Link className="btn btn--gradient btn--rounded mr-30" to="/#core">{t("Learn More")}</Link>
                    </div>
                </div>
              </div> 
        </div>
      </section>
  )
}

export default Banner;