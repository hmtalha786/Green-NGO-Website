/** @format */

import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const SecSection = () => {
	const textLeftFrame = [
		{ transform: "translateY(200px)", opacity: 0 },
		{ transform: "translateY(0px)", opacity: 1 },
	];

	const textLeftTiming = {
		duration: 3000,
		iterations: 1,
		delay: 2000,
		easing: "ease-out",
	};
	const textLeftEffect = useWebAnimations({
		keyframes: textLeftFrame,
		timing: textLeftTiming,
	});
	return (
		<>
			<div className="row align-items-center" ref={textLeftEffect.ref}>
				<div className="col col-sm-12">
					<h1 className="display-3 text-center">Go For Green Vitality</h1>
					<p className="lead text-center qoutations">
						Trees don't boost WiFi signals they just give Oxygen
					</p>
				</div>
			</div>
		</>
	);
};
