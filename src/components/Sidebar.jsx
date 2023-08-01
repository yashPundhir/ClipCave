// import React from "react";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<div className="flex flex-row md:flex-col gap-6  overflow-x-auto overflow-y-hidden md:overflow-y-auto h-auto md:h-[95%] mb-5 md:mb-0">
			{categories.map((category, index) => (
				<button
					key={index}
					className="category-btn justify-start gap-3.5 border-2 border-red-600 pl-5 pr-5 md:pr-0 py-3 w-[250px]   "
					style={{
						background:
							category.name === selectedCategory ? "#fc1503" : "transparent",
					}}
					onClick={() => {
						setSelectedCategory(category.name);
					}}
				>
					<span className="w-7">
						<img className="w-7 " src={category.icon} alt="logo" />
					</span>
					<span className="text-base md:text-xl font-semibold w-[80px] md:w-auto">
						{category.name}
					</span>
				</button>
			))}
		</div>
	);
};

export default Sidebar;
