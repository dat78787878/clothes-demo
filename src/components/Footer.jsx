import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo.png'

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/contact"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    },
    {
        display: "Tuyển dụng",
        path: "/contact"
    },
    {
        display: "Tin tức",
        path: "/contact"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/contact"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/contact"
    },
    {
        display: "Chính sách bảo hành",
        path: "/contact"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/contact"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về chúng tôi
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
