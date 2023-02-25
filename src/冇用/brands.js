import React from 'react';
import { useTranslation } from "react-i18next";

const Brands = () => {

  const { t } = useTranslation();

  return (
    <section id="brands" className="featured featured-1 text-center pt-110">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading  mb-50 text--center">
                <h2 className="heading--title">{t("Brands.title")}</h2>
                <p className="heading--desc mb-0">{t("Brands.sub")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 mb-40">
              <div className="feature-card">
                <div>
                  <img src="assets/images/logo/logo_MC-Cyprus.png" alt={t("Brands.list1Title")} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 border-bottom mb-40">
              <div className="feature-card">
                <div className="feature-card-content">
                  <h3 className="feature-card-title text--left">{t("Brands.list1Title")}</h3>
                </div>
                <div className="feature-card-content">
                  <p className="feature-card-desc text--left">
                  {t("Brands.list1P1")}<br /><br />
                  {t("Brands.list1P2")}<br /><br />
                  {t("Brands.list1P3")}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-40">
              <div className="feature-card">
                <div>
                  <img src="assets/images/logo/logo_MC-Securities.png" alt={t("Brands.list2Title")} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 border-bottom mb-40">
              <div className="feature-card">
                <div className="feature-card-content">
                  <h3 className="feature-card-title text--left">{t("Brands.list2Title")}</h3>
                </div>
                <div className="feature-card-content">
                  <p className="feature-card-desc text--left">
                  {t("Brands.list2P1")}<br /><br />
                  {t("Brands.list2P2")}<br /><br />
                  {t("Brands.list2P3")}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-40">
              <div className="feature-card">
                <div>
                  <img src="assets/images/logo/logo_MC-Wealth.png" alt={t("Brands.list3Title")} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 border-bottom mb-40">
              <div className="feature-card">
                <div className="feature-card-content">
                  <h3 className="feature-card-title text--left">{t("Brands.list3Title")}</h3>
                </div>
                <div className="feature-card-content">
                  <p className="feature-card-desc text--left">
                  {t("Brands.list3P1")}<br /><br />
                  {t("Brands.list3P2")}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-40">
              <div className="feature-card">
                <div>
                  <img src="assets/images/logo/logo_MC-Financial.png" alt={t("Brands.list4Title")} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 border-bottom mb-40">
              <div className="feature-card">
              <div className="feature-card-content">
                  <h3 className="feature-card-title text--left">{t("Brands.list4Title")}</h3>
                </div>
                <div className="feature-card-content">
                  <p className="feature-card-desc text--left">
                  {t("Brands.list4P1")}<br /><br />
                  {t("Brands.list4P2")}<br /><br />
                  {t("Brands.list4P3")}<br />
                  {t("Brands.list4P4")}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-40">
                <div class="feature-card">
                    <div>
                        <img src="assets/images/logo/logo_MC-International.png" alt="Magic Compass International Capital Ltd" />
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-8 border-bottom mb-40">
                <div className="feature-card ">
                  <div className="feature-card-content">
                    <h3 className="feature-card-title text--left">{t("Brands.list5Title")}</h3>
                  </div>
                  <div className="feature-card-content">
                    <p className="feature-card-desc text--left">
                      {t("Brands.list5P1")}<br /><br />
                      {t("Brands.list5P2")}<br />
                      {t("Brands.list5P3")}<br />
                      {t("Brands.list5P4")}<br />
                      {t("Brands.list5P5")}
                    </p>
                  </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-40">
                <div class="feature-card">
                    <div>
                        <img src="assets/images/logo/logo_MC-Colorada.png" alt={t('Brands.list6Title')} />
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-8 border-bottom mb-40">
                <div class="feature-card">
                    <div class="feature-card-content">
                        <h3 class="feature-card-title text--left">{t('Brands.list6Title')}</h3>
                    </div>
                    <div class="feature-card-content">
                        <p class="feature-card-desc text--left">
                          {t("Brands.list6P1")}<br /><br />
                          {t("Brands.list6P2")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-40">
              <div className="feature-card">
                <div>
                  <img src="assets/images/logo/logo_MC-Investments.png" alt={t('Brands.list7Title')} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 border-bottom mb-40">
              <div className="feature-card ">
                <div className="feature-card-content">
                  <h3 className="feature-card-title text--left">{t("Brands.list7Title")}</h3>
                </div>
                <div className="feature-card-content">
                  <p className="feature-card-desc text--left">
                    {t("Brands.list7P1")}<br /><br />
                    {t("Brands.list7P2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Brands;