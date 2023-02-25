import React from "react"
import { useTranslation } from "react-i18next";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewsDetails = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Row>
        <div class="showRoom">
        <Col><img src="assets/images/GDC/IMG_0875.JPG" alt="banner img" className="banner--img" /></Col>
        <Col><img src="assets/images/GDC/IMG_0875.JPG" alt="banner img" className="banner--img" /></Col>
        <Col><img src="assets/images/GDC/IMG_0875.JPG" alt="banner img" className="banner--img" /></Col>
        <Col><img src="assets/images/GDC/IMG_0875.JPG" alt="banner img" className="banner--img" /></Col>
        </div>
      </Row>
      <Row>
        <div class="showRoom">
        <Col><img src="assets/images/GDC/IMG_0897.JPG" alt="banner img" className="banner--img"/></Col>
        <Col><img src="assets/images/GDC/IMG_0897.JPG" alt="banner img" className="banner--img"/></Col>
        <Col><img src="assets/images/GDC/IMG_0897.JPG" alt="banner img" className="banner--img"/></Col>
        <Col><img src="assets/images/GDC/IMG_0897.JPG" alt="banner img" className="banner--img"/></Col>
        </div>
      </Row>
    </div>
  )
}

export default NewsDetails;