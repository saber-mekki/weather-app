import React from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Home } from "../../pages/Home";

import "./index.css";

export default function Layout(): JSX.Element {
	return (
		<div className="body__clz">
			<div className="header__clz">
				<Header />
			</div>
			<div className="home__clz">
				<Home />
			</div>
			<div className="footer__clz">
				<Footer />
			</div>
		</div>
	);
}
