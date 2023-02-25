import React from 'react'
import { useTranslation } from "react-i18next";
  
const Advantage = () => {

  const { t } = useTranslation();

  return (
    <section id="core" className="featured featured-4 featured-left">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="feature-card">
                    <div className="feature-card-content">
                    <img src="assets/images/logo/beautiful-cryptocurrwncy-concept.jpg" alt={t("Brands.list1Title")} class="cryptoConcept" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="feature-card">
                    <div className="feature-card-content">
                    <h3 className="feature-card-title">{t("Our Services")}</h3>
                      <ul>
                                    <li className="feature-card-desc">{t("Virtual Currency Exchange: Our virtual currency exchange service allows you to buy and sell a variety of virtual currencies using fiat currency.")}</li>
                                    <li className="feature-card-desc">{t("Virtual Currency Wallet: Allows you to store and manage your virtual currencies in one convenient place.")}</li>
                                    <li className="feature-card-desc">{t("Customer Support: Our team of virtual currency experts is available 24/7 to assist you with any questions or issues you may have.")}</li>
                                    <li className="feature-card-desc">{t("Money transmission")}</li>
                                    <li className="feature-card-desc">{t("Secure and Convenient Platform: We use industry-leading technology to protect against fraud and unauthorized access, and our user-friendly interface makes it easy to buy, sell, and manage your virtual currencies.")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Advantage;