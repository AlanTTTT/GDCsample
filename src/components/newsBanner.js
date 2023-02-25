import React from 'react'
import { useTranslation } from "react-i18next";

const NewsBanner = () => {

  const { t } = useTranslation();

  return (
    <section id="page-title" className="page-title bg-overlay bg-overlay-dark bg-parallax cb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>{t("GDC Showroom")}</h1>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default NewsBanner;