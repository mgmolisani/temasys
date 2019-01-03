import React from "react";
import logo from "../logo.png";
import { css } from "emotion";
import Container from "./Container";
import { useDeviceSize } from "../hooks/useDeviceSize";

const Header = props => {
	const child = useDeviceSize({
		lg: <p>I'm large!</p>,
		sm: <p>I'm small!</p>
	});

	return (
		<Container>
			{child}
			<div
				className={css({
					display: "flex",
					height: "5em"
				})}
			>
				<img
					className={css({
						objectFit: "contain",
						marginRight: "auto",
						height: "100%"
					})}
					src={logo}
					alt={"TEMASYS, Inc."}
				/>
			</div>
		</Container>
	);
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
