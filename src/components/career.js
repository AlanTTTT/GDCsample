import React from 'react'
import { useTranslation } from "react-i18next";

const Career = () => {

  const { t } = useTranslation();

  return (
    <section id="pricing1" className="pricing pricing-1 bg-overlay bg-overlay-dark pt-110 pb-0">
        <div className="container">
          <div className="row clearfix">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading heading-1 text--center mb-40">
                <h3 className="heading--title">{t("About Us")}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-40">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 price-table">
            <img src="assets/images/logo/trust.jpg" alt={t("Brands.list1Title")} style={{width: "96%", marginTop:"-40px"}}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 price-table pricing-active">
              <div className="pricing-panel">
                <div className="pricing--heading text--center">
                  <h3 className="text-white">{t("About GDC, the deluxe Beauty packaging world!")}</h3>
                  <div className="pricing--desc">
                    <p>GD Concept Ltd is one of the leading paper product and deluxe packaging producers over the world especially in Cosmetic field, with base in China.  GDC has office with showroom and factory in Dongguan. Through ongoing improvement in equipments, materials, processes and people, GDC strives to provide high demanding paper products and packaging to our clients.<br/><br/>
For the packaging, GDC’s ability for handling the difficult and challenging non-paper wrapping jobs like PU rigid vanity is recognized by most of our existing clients.  Rigid box with printed effects on mylar paper, cat eye foil paper, soft touch paper, special texture paper beside using the common artpaper or wood freepaper wrap are also our current producing items.  And handling the special treatments like debossing, embossing, hot stamping, spot UV.... are not difficult jobs for us .  GDC has being a well established supplier for most of  the highest demanding brands in the European and American markets like Christine Dior, Guerlain, Sheshido, Lancome....and so on.  Our factory has been well audited by LVMH and L'oreal.<br/><br/>
Regarding the paper products, GDC also specializes in manufacturing high quality of gift and premium to the customers like mirror, pallete, note book, pen holder, tissue box holder, picture frame, album, small velvet pouch, small tote bag and so on.  Our aim is to assit our business partners to differentiate from others and ensure their success.</p>
<h3 style={{color: "white"}}>YOUR DEMANDS OUR COMMITMENT </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider" />
      </section>
  )
}

export default Career;