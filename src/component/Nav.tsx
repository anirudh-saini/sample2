import React from "react";
import Link from "next/link";
const Nav = () => {
    return (
        <>
        <div className="nav">
            <div className="nav_logo">
                <div>
                    <input
                        type="checkbox"
                        id="Toggle"
                        // onClick={handleCheckboxClick}
                    />
                    <label htmlFor="Toggle">
                        <div className="Menu-container">
                            <div className="line" id="active"></div>
                        </div>
                    </label>
                </div>
                {/* <div>
                    <ul>
                        <li>Home</li>
                        <li>Tire Service</li>
                        <li>Gallery</li>
                        <li>testimonials</li>
                        <li>About</li>
                        <li>Content</li>
                    </ul>
                </div> */}
                <img src="/Logo.png" alt="logo" />
            </div>
            <div className="nav_button">
                <Link href="tel:(619)544-9129">(619)544-9129</Link>
                <Link href="/">Visit Us Today</Link>
            </div>
        </div>
        </>
    );
};

export default Nav;
