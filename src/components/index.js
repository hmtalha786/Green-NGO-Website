import React from "react";
import { Breathe } from "./Breathe";
import { Navigation } from "./navigation";
import { Pollution } from "./pollution";
import { Restoration } from "./Restoration";
import { Footer } from "./footer";

const index = () => {
	return (
		<div>
			<div>
				<Navigation />
			</div>
			<div className="main_section" id="Breathe">
				<Breathe />
			</div>
			<div className="third_section" id="Pollution">
				<Pollution />
			</div>
			<div className="fourth_section" id="Restoration">
				<Restoration />
			</div>
			<div className="footer_section" id="Footer">
				<Footer />
			</div>
		</div>
	);
};

export default index;
