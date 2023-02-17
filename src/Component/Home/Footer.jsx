import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../../assets/logo.png";
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <div className="footer">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <div className="brand">
                  <div className="container" style={{ color: "#48cae4" }}>
                    <img src={logo} alt="" />
                    Travelo
                  </div>
                  <div className="toggle"></div>
                </div>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Liên kết</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Trang chủ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Tour
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Yêu thích
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Liên hệ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Giới thiệu
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Lê Xuân Viên
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  lexuanvien04@gmail.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  0353386306
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> +
                  01 234 567 89
                </p>
                <div className="network">
                  <Link href='https://www.facebook.com/vienhelios03/'>
                    <button type="button">
                      <FacebookIcon />
                    </button>
                  </Link>
                  <Link href='https://www.instagram.com/vien.helios/'>
                    <button type="button">
                      <InstagramIcon />
                    </button>
                  </Link>
                  <Link href='#'>
                    <button type="button">
                      <TwitterIcon />
                    </button>
                  </Link>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter>
    </div>
  );
}