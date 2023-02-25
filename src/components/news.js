import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

const News = () => {

  const { t } = useTranslation();

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <section id="news" className="testimonial testimonial-1 pt-100 pb-100">
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading  mb-50 text--center">
              <h2 className="heading--title">{t("Enquiry")}</h2>
              <p className="heading--desc mb-0">{t("If you want to know more about us, please leave us your information below.")}</p>
            </div>
          </div>
        </div>

        <div className='container'>
          <form action='https://formsubmit.co/e8e9b5f3d14286abeb03903121913ba1' method='POST' class="contactform">
              <input class='Name' placeholder='Company' required type='text' />
              <input class='Name' placeholder='Name' required type='text' />
              <input class='Name' placeholder='Address' type='text' />
              <input class='Name' placeholder='Tel' required type='text' />
              <input class='Name' placeholder='Fax'  type='text' />
              <input class='Email' placeholder='Email' required type='email' />
              <textarea name='Message' placeholder='Message' required></textarea>
              <button to="/Contact" className="btn btn--white btn--bordered btn--rounded">{t("Send")}</button>
          </form>
        </div>
      </section>
  )
}

export default News;