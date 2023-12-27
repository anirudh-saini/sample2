import React from "react";
import Link from "next/link";

interface NavProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamOpen = () => {
	return <>&#9776;</>;
};

const HamClose = () => {
	return <>&#10006;</>;
};

const Nav = ({ open, setOpen }: NavProps) => {
	return (
		<>
			<div className="nav">
				<div className="nav_logo">
					<img src="/Logo.png" alt="logo" />
				</div>
				{/* <div className="nav_button">
					<Link href="tel:(619)544-9129">(619)544-9129</Link>
					<Link href="/">Visit Us Today</Link>
				</div> */}

				<div className="nav-items">
					<div className="nav-items__trigger">
						<input
							type="checkbox"
							id="hamburger"
							checked={open}
							onChange={(e) => setOpen(e.target.checked)}
						/>
						<label htmlFor="hamburger">
							{open ? <HamClose /> : <HamOpen />}
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
