import React from 'react';
import { useTranslation } from "react-i18next";
  
const Values = () => {

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
                      <h3 className="feature-card-title">{t("Why Magic Compass")}</h3>
                      <ul>
                                    <li className="feature-card-desc">{t("Security: As a licensed MTR provider regulated by the Police and Border Guard Board, we prioritize the security of our customers' transactions and information. We use industry-leading technology to protect against fraud and unauthorized access, so you can trust that your virtual currencies are safe with us.")}</li>
                                    <li className="feature-card-desc">{t("Convenience: Our virtual currency exchange and wallet services are designed to be easy to use, so you can focus on your financial goals without any unnecessary hassle. Whether you're a seasoned virtual currency user or new to the world of digital assets, our user-friendly platform makes it easy to buy, sell, and manage your virtual currencies.")}</li>
                                    <li className="feature-card-desc">{t("Expertise: Our team of virtual currency experts has extensive knowledge and experience in the field, so you can count on us to provide reliable and accurate information and support. We are here to answer any questions you may have and help you navigate the world of virtual currency with confidence.")}</li>
                                    <li className="feature-card-desc">{t("Competitive rates: We offer competitive exchange rates for virtual currencies, so you can get the most value for your money. Our rates are updated in real-time, so you can be sure you're getting the best deal when you use our services.")}</li>
                                    <li className="feature-card-desc">{t("Dedicated customer support: Our customer support team is available 24/7 to assist you with any questions or issues you may have. We pride ourselves on providing exceptional service and are always here to help.")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="feature-card">
                    <div className="feature-card-content">
                      <img src="../public/assets/images/GDC/IMG_0875.JPG" alt={t("Brands.list1Title")} />
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

export default Values;