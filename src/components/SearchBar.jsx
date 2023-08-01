import { useState } from "react";
import { useNavigate } from "react-router-dom";

import search from "../assets/search.svg";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			navigate(`/search/${searchTerm}`);

			setSearchTerm("");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center rounded-[20px] border-4 border-red-300 pl-4 sm:mr-5 bg-white mt-4"
		>
			<input
				type="text"
				className="search-bar text-xl text-black"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
			/>
			<button
				type="submit"
				className="px-3 py-2 bg-red-200 text-white rounded-l-none rounded-2xl"
			>
				<img className="w-[26px]" src={search} alt="searchIcon" />
			</button>
		</form>
	);
};

export default SearchBar;
