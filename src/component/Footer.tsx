import React from "react";
import Link from "next/link";
const Footer = () => {
    return (
        <div>
            <div className="footer_main">
                <div className="footer_main_item">
                    <img src="/location.JPG" alt="location" />
                    <p>2276 National Ave.San Diego , CA 92113</p>
                    <Link href="/">Get Directions</Link>
                </div>
                <div className="footer_main_item">
                    <img src="/time.JPG" alt="time" />
                    <div className="footer_main_item_1">
                        <p>Mon - Sun</p>
                        <p>8:00 am - 5:00 pm</p>
                    </div>
                </div>
                <div className="footer_main_item">
                    <img src="/contact.JPG" alt="contact" />
                    <p>Main: (619) 544-9129</p>
                    <p>
                        <Link href="mailto:example@gmail.com">
                            example@gmail.com
                        </Link>
                    </p>
                </div>
                <div className="footer_main_facebook">
                    <div className="footer_main_facebook_line1"></div>
                    <div className="footer_main_facebook_border">
                        <img src="/facebook.svg" alt="facebook" />
                    </div>
                    <div className="footer_main_facebook_line2"></div>
                </div>
            </div>
            <div className="footer_main2">
                <p>
                    <Link href="/">Privacy Policy</Link> |{" "}
                    <Link href="/">Do Not Share My Information</Link> |{" "}
                    <Link href="/">Conditions of Use</Link> |{" "}
                    <Link href="/">Notice and Take Down Policy</Link> |{" "}
                    <Link href="/">Website Accessibility Policy</Link>
                </p>
                <p>
                    © 2023 The content on this website is owned by us and our
                    licensors. Do not copy any content (including images)
                    without our consent.
                </p>
            </div>
        </div>
    );
};

export default Footer;
