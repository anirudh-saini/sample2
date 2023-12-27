"use client";

import React, { useState } from "react";
import Nav from "@/component/Nav";
import Footer from "@/component/Footer";

export default function Main({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="god">
				<div className={`main ${open ? "nav-open" : ""}`}>
					<Nav open={open} setOpen={setOpen} />
					{children}
					<Footer />
				</div>

				<div className={`nav-links ${open ? "open" : ""}`}>
					<ul>
						<li>Home</li>
						<li>Tire Service</li>
						<li>Gallery</li>
						<li>testimonials</li>
						<li>About</li>
						<li>Content</li>
					</ul>
				</div>
			</div>
		</>
	);
}
