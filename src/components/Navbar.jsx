import { Link } from "react-router-dom";

import logo from "../assets/logo1.svg";
import SearchBar from "./SearchBar";

const Navbar = () => {
	return (
		<div className="flex items-center gap-7 px-2 pt-2 pb-5 sticky bg-black top-0 justify-between z-10">
			<Link to="/" className="flex items-center mt-4 ml-3 ">
				<img src={logo} alt="logo" className="h-[35px] md:h-[45px]" />
			</Link>
			<SearchBar />
		</div>
	);
};

export default Navbar;
