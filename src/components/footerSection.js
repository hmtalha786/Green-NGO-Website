/** @format */

import React from "react";
import { Grid } from "@material-ui/core";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../css/footersection.css";

export const FooterSection = () => {
	const textLeftFrame = [
		{ transform: "translateY(100px)", opacity: 0 },
		{ transform: "translateY(0px)", opacity: 1 },
	];

	const textLeftTiming = {
		duration: 3000,
		iterations: 1,
		delay: 6000,
		easing: "ease-out",
	};
	const textEffect = useWebAnimations({
		keyframes: textLeftFrame,
		timing: textLeftTiming,
	});
	return (
		<div className="footer">
			<Grid container className="row align-items-left" ref={textEffect.ref}>
				<Grid item xs={12} sm={4} className="col col-sm-4">
					<h1 className="">About Us</h1>
					<p className=" text-justify">
						Our Motive is to make our Country and the World more Green and
						Eco-friendly. Joining hands to work towards a cleaner and greener
						Pakistan. Motive is to Reduce, Recycle and Reuse.
					</p>
				</Grid>
				<Grid item xs={12} sm={4} className="col col-sm-3">
					<h3 className="text-center ">Important Links</h3>
					<ul className="nav-link text-center important-link">
						<li>
							<a href="#main_section">Tree plantation</a>
						</li>
						<li>
							<a href="#main_section">Buy Tree</a>
						</li>
						<li>
							<a href="#main_section">Buy Seeds</a>
						</li>
						<li>
							<a href="#main_section">Location for Plantation</a>
						</li>
						<li>
							<a href="#main_section">Tools & Kits</a>
						</li>
					</ul>
					<h3 className="text-center">Follow us</h3>
					<ul className="nav-link text-center social-media">
						<li>
							<a href="#main_section">
								<i className="fab fa-facebook"></i>
							</a>
						</li>
						<li>
							<a href="#main_section">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="#main_section">
								<i className="fab fa-instagram"></i>
							</a>
						</li>
						<li>
							<a href="#main_section">
								<i className="fab fa-github"></i>
							</a>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} sm={4} className="col col-sm-5">
					<h1 className="">Contact Us</h1>
					<div className=" text-justify">
						<form>
							<div className="form-group">
								{/* <label for="name">Full Name</label> */}
								<input
									type="text"
									className="form-control"
									placeholder="Enter Full Name"
									id="inputFullName"
									required
								/>
							</div>
							<div className="form-group">
								{/* <label for="inputEmail1">Email address</label> */}
								<input
									type="email"
									className="form-control"
									id="inputEmail1"
									placeholder="Enter Email"
									aria-describedby="emailHelp"
									required
								/>
							</div>
							<div className="mb-3">
								{/* <label for="validationTextarea">Textarea</label> */}
								<textarea
									className="form-control"
									id="validationTextarea"
									placeholder="Your Message"
									required
								></textarea>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
