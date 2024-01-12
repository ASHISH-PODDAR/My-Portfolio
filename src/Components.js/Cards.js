import React from "react";

export default function Cards({
	title,
	description,
	animation,
	additionalStyles,
}) {
	title = "Title";
	description = "Description";

	const neuStyle = {
		background: "#f0f2f5",
		...additionalStyles,
	};

	return (
		<div
			style={neuStyle}
			className={` h-64 shadow-lg ${
				animation === "right" ? `animate-slideLeft` : `animate-slideRight`
			} shadow-gray-500 rounded-lg border p-2 `}
		>
			<div className="text-2xl ml-4 mt-2 font-bold ">{title}</div>
			<div className="text-xl ml-4 mt-2 font-medium ">{description}</div>
		</div>
	);
}
