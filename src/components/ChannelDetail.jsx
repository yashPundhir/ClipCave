import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState({});

	const [videos, setVideos] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
			setChannelDetail(data?.items[0]);
		});

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => {
				setVideos(data?.items);
			}
		);
	}, [id]);

	return (
		<div className=" min-h-[95vh] ">
			<div className="flex flex-col items-center justify-center">
				<div
					className=" h-[300px] w-full"
					style={{
						background:
							"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(94,94,94,1) 50%, rgba(0,0,0,1) 100%)",
					}}
				/>
				<ChannelCard channelDetail={channelDetail} marginTop="-130px" />
			</div>
			<div className="flex sm:gap-12  gap-0 justify-center items-center p-2 mt-20">
				<div />
				<Videos videos={videos} />
			</div>
		</div>
	);
};

export default ChannelDetail;
