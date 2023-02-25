import React from "react";
import AddSubscribe from "./addSubscriber";
import { useTranslation } from "react-i18next";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer footer-1">
        <div className="footer-widget">
          <div className="container">

    <Row className="justify-content-md-center">
      <Col xs lg="3">
                <div className="row clearfix">
                <div className="widget-title">
                <LocationOnOutlinedIcon sx={{ fontSize: 30 }} /><h2>Address</h2>
                </div>
                <p>Tianmei Industrial Zone, Huanjiang Town,<br/>Dongguan City, Guangdong, China</p>              
            </div>
      </Col>
      <Col md="3">
      <div className="row clearfix">
                <div className="widget-title">
                <CallRoundedIcon sx={{ fontSize: 30 }} /><h2>Contact Us</h2>
                </div>
                <p>Tel. :	+(86) 769 - 3899 8900 ext 809</p>
                <p>Fax :	+(86) 769 - 3899 8936</p>                
            </div>
            </Col>
            <Col xs lg="3">
                <div className="row clearfix">
                <div className="widget-title">
                <BusinessRoundedIcon sx={{ fontSize: 30 }} /><h2>GD Concept Ltd</h2>
                </div>
                <p>Name :	Mr. Gary Lam</p>
                <p>Position :	Managing Director</p> 
                <p>Address :	Tianmei Industrial Zone, Huanjiang Town,<br/>Dongguan City, Guangdong, China</p> 
                <p>Email :	info@gdc.hk</p> 
                <p>Web :	www.gdc.hk</p>              
            </div>
            </Col>
        </Row>

          </div>
        </div>
        <div className="footer--bar">
          <div className="row">
            <div className="col-12 col-md-12 col-md-12 text--center footer--copyright">
              <div className="copyright">
                <span>{t("Copyright © 2023 GD Concept Ltd. All rights reserved")}</span></div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;