import React from 'react';
import { withTranslation } from "react-i18next";


const Milestone = ({ t }) => {

  return (
    <section id="milestone" className="ms pricing pricing-1 bg-overlay bg-overlay-dark2 pt-110 pb-0">
        
        <div className="container">
          <div className="row clearfix">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-md-3">
              <div className="heading heading-1 text--center mb-40">
                <h2 className="heading--title text-white">{t('Milestone.title')}</h2>
                <p className="heading--desc heading--light mb-0">{t('Milestone.sub')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pTB120">
          <div className="text-center pTB120">
              <div id="my-roadmap" className="roadmap roadmap--orientation-auto roadmap--initialized">
                <ol className="roadmap__events">
                  <li className="roadmap__events__event" style={{left: "0%"}}>
                    <div className="event">
                      <div className="event__date">{t("Milestone.eventDate1")}</div>
                      <div className="event__content">{t("Milestone.eventContent1")}</div>
                    </div>
                  </li>
                  <li className="roadmap__events__event" style={{left: "25%"}}>
                  <div className="event">
                      <div className="event__date">{t("Milestone.eventDate2")}</div>
                      <div className="event__content">{t("Milestone.eventContent2")}</div>
                    </div>
                  </li>
                  <li className="roadmap__events__event" style={{left: "50%"}}>
                  <div className="event">
                      <div className="event__date">{t("Milestone.eventDate3")}</div>
                      <div className="event__content">{t("Milestone.eventContent3")}</div>
                    </div>
                  </li>
                  <li className="roadmap__events__event" style={{left: "75%"}}>
                    <div className="event">
                      <div className="event__date">{t("Milestone.eventDate4")}</div>
                      <div className="event__content">{t("Milestone.eventContent4")}</div>
                    </div>
                  </li>
                  <li className="roadmap__events__event" style={{left: "100%"}}>
                    <div className="event">
                      <div className="event__date">{t("Milestone.eventDate5")}</div>
                      <div className="event__content">{t("Milestone.eventContent5")}</div>
                    </div>
                  </li>
                </ol>
                <ul className="roadmap__navigation"><li></li><li></li></ul>
              </div>
          </div>
        </div>
      </section>
  )
}

export default withTranslation()(Milestone);