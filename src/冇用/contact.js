import React from 'react';
import { useEffect, useState } from 'react';
import InputField from "../components/InputField";
import TextareaField from "../components/TextareaField";
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";


function Contact() {

  const { t } = useTranslation();

  const [values, setValues] = useState({
    from_name:'',
    client_phone:'',
    message:'',
    reply_to:''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_b1uswzd', 'template_vgm8tfk', values, '-ajU8DzimKYT2fFxa')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          from_name:'',
          client_phone:'',
          message:'',
          reply_to:''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);


  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  

  return (
    <section id="contact1" className="contact contact-1 pt-110 pb-110 text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading heading-2 mb-50 text--center">
                <h2 className="heading--title">{t("Contact.title")}</h2>
                <p className="heading--desc mb-0">{t("Contact.sub")}</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="contact--info">
                <h3>{t("Contact.address")}</h3>
                <p>Cistra Corporate Services Centre,</p>
                <p>Wickhams Cay II, Road Town,</p>
                <p>Tortola, VG1110,</p>
                <p>British Virgin Islands.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="contact--info">
                <h3>{t("Contact.email")}</h3>
                <p><a href="mailto:info@mcgrp.com">info@mcgrp.com</a></p>
              </div>
            </div>
          </div>
          <div className="row mt-40">
            <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
              {status && renderAlert()}
              <form onSubmit={handleSubmit}>
              <div className="row">
                    <InputField
                      type='text'
                      label="Name"
                      name='from_name'
                      placeholder={t("Contact.formName")}
                      value={values.from_name}
                      handleChange={handleChange}
                      className="form-control"
                    />
                      <InputField
                        type='text'
                        label="Email"
                        name='reply_to'
                        placeholder={t("Contact.formEmail")}
                        value={values.reply_to}
                        handleChange={handleChange}
                        className="form-control"
                      />
                      <InputField
                        type='text'
                        label="Phone No."
                        name='client_phone'
                        placeholder={t("Contact.formPhone")}
                        value={values.client_phone}
                        handleChange={handleChange}
                        className="form-control"
                      />
                </div>  
                <div className="row">
                      
                    
                        <TextareaField
                          name='message'
                          placeholder={t("Contact.formMessage")}
                          value={values.message}
                          handleChange={handleChange}
                          className="form-control"
                        />
                </div>
                <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <input
                          type='submit'
                          name='submit'
                          value={t("Contact.formSubmit")}
                          className="btn btn--primary"
                        />
                      </div>
                </div>
              
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Your message submitted successfully!</p>
  </div>
)


export default Contact