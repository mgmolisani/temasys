import React from "react";
import { css, cx } from "emotion";
import { useDeviceSize } from "../hooks/useDeviceSize";

const Container = props => {
	const { className, ...rest } = props;
	const maxWidth = useDeviceSize({
		xl: 1140,
		lg: 960,
		md: 720,
		sm: 540,
		default: "none"
	});

	return (
		<div
			className={cx(
				css({
					width: "100%",
					maxWidth,
					margin: "auto"
				}),
				className
			)}
			{...rest}
		>
			{props.children}
		</div>
	);
};

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
