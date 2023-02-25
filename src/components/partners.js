import React from 'react'
import { useTranslation } from "react-i18next";

const Partners = () => {

  const { t } = useTranslation();

  return (
    <section id="partners" className="team team-1 pt-110 pb-60">
        <div className="container">
          <div className="row clearfix">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading  mb-50 text--center">
                <h2 className="heading--title">{t("Partners.title")}</h2>
                <p className="heading--desc mb-0">{t("Partners.sub")}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="clients clients-1 pt-30 pb-0 row justify-content-center">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/1.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/2.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/3.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/4.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/5.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/18.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/7.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/8.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/9.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/10.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/11.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/12.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/13.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/14.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/15.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/16.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/17.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/19.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/20.png" alt="partners" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 client">
                <img src="assets/images/clients/21.png" alt="partners" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Partners;