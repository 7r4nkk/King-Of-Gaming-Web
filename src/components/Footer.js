import React from "react";
import { BsYoutube, BsWhatsapp, BsFacebook } from "react-icons/bs";
import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer mt-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col col-xs-12">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <h4 className="kogfooter">KING OF <span className="green">GAMING</span></h4>
                                <address className="textoB">
                                    Springfield County<br />
                                    Calle Falsa 123
                                    <br />
                                    USA
                                </address>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xs-12">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <ul className="social-media">
                                    <li>
                                        <a
                                            href="https://www.whatsapp.com/?lang=es"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <BsWhatsapp className="text-success" />
                                            <i className="ion-social-whatsapp-outline"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.youtube.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <BsYoutube className="text-danger" />
                                            <i className="ion-social-instagram-outline"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="https://www.facebook.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <BsFacebook className="text-primary" />
                                            <i className="ion-social-facebook"></i>
                                        </a>
                                    </li>
                                </ul>
                                <span className="copyright-mark textoB">
                                    &copy; 2021 KING OF GAMING <br />
                                    ALL RIGHTS RESERVED <br />
                                    Design by Frank Elian Fobello
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-4 col-xs-12">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <h4 className="texto">CONTACTO</h4>
                                <p className="textoB">
                                    1234 56 7890 <br />
                                    info@kingofgaming.store
                                    <br />
                                    <Link className="green linkweb" style={{ textDecoration: 'none' }} to='/'> {" "}  www.kingofgaming.com.ar</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}