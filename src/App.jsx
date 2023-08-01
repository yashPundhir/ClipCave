import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
	Navbar,
	Feed,
	VideoDetail,
	ChannelDetail,
	SearchFeed,
} from "./components";

const App = () => (
	<BrowserRouter>
		<div className="bg-black text-white">
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Feed />} />
				<Route path="/video/:id" element={<VideoDetail />} />
				<Route path="/channel/:id" element={<ChannelDetail />} />
				<Route path="/search/:searchTerm" element={<SearchFeed />} />
			</Routes>
		</div>
	</BrowserRouter>
);

export default App;
