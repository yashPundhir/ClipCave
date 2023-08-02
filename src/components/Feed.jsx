import { useState, useEffect } from "react";

import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
			setVideos(data.items);
		});
	}, [selectedCategory]);

	return (
		<div className="flex md:flex-row flex-col ">
			<div className=" h-auto md:h-[92vh] border-r-2  border-r-[#3d3d3d] px-0 md:px-5">
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<h4 className="copyright text-sm mt-1.5">
					Copyright © 2023 - ClipsCave
				</h4>
			</div>
			<div className="px-7 overflow-y-auto h-[90vh] flex-2 ">
				<h2 className=" text-[45px] font-bold -mt-2 mb-5">
					{selectedCategory}{" "}
					<span className="text-[#fc1503] capitalize">Videos</span>
				</h2>
				<Videos videos={videos} />
			</div>
		</div>
	);
};

export default Feed;
