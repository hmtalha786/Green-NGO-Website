/** @format */

import React from "react";
import growingplant from "../images/growingPlantSeries3.svg";
import useWebAnimations from "@wellyshen/use-web-animations";
import { Grid } from "@material-ui/core";
import "../css/growingPlant.css";

export const GrowingPlant = () => {
	const textLeftFrame = [
		{ transform: "translateX(-200px)", opacity: 0 },
		{ transform: "translateX(0px)", opacity: 1 },
	];

	const textLeftTiming = {
		duration: 3000,
		iterations: 1,
		delay: 4000,
		easing: "ease-out",
	};
	const textEffect = useWebAnimations({
		keyframes: textLeftFrame,
		timing: textLeftTiming,
	});

	const plantFrames = [
		{ transform: "translateY(-100%)" },
		{ transform: "translateY(0%)" },
	];
	const plantTiming = {
		easing: "steps(8, end)",
		direction: "reverse",
		duration: 4000,
		playbackRate: 1,
		iterations: Infinity,
	};

	const growingPlant = useWebAnimations({
		keyframes: plantFrames,
		timing: plantTiming,
	});
	return (
		<>
			<Grid
				container
				className="row align-items-center growing_plant_container"
			>
				<Grid className="col col-md-6 left-side" ref={textEffect.ref}>
					<h1 className="display-3 text-center">Each one, Plant one.</h1>
					<p className="lead text-center">
						plant a tree so that next generation can get air for free.
						<br />
						<br />
						<button className="btn btn-success ">Learn More</button>
					</p>
				</Grid>
				<Grid item xs={12} sm={6} className="">
					<div className=" col col-md-6 growing_plant">
						<img
							src={growingplant}
							className="growing_plant_series"
							alt="Green City Pollution Free setup"
							ref={growingPlant.ref}
						/>
					</div>
				</Grid>
			</Grid>
		</>
	);
};
