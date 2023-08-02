import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
	const { searchTerm } = useParams();

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerm]);

	return (
		<div className="px-7 overflow-y-auto h-[90vh] flex-2 ">
			<h2 className=" text-[45px] font-bold mb-5">
				Search Results for:{" "}
				<span className="text-[#fc1503] capitalize">{searchTerm}</span> Videos
			</h2>
			<Videos videos={videos} />
		</div>
	);
};

export default SearchFeed;
