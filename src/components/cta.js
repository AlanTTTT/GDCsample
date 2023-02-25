import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

const Cta = () => {

  const { t } = useTranslation();

  return (
    <section id="cta1" className="cta cta-1 bg-theme">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-9">
              <h3>{t("CTA.msg")}</h3>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3 text-right">
              <Link to="/Contact" className="btn btn--white btn--bordered btn--rounded">{t("CTA.btn")}</Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Cta;