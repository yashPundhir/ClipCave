import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import CheckCircleIcon from "../assets/checkcircle.svg";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState({});

	const [videos, setVideos] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
			setVideoDetail(data.items[0]);
		});

		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
			(data) => {
				setVideos(data.items);
			}
		);
	}, [id]);

	if (!videoDetail?.snippet) {
		return (
			<div className="text-[50px] px-7  text-white font-semibold">
				Loading...
			</div>
		);
	}

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetail;

	// const { snippet, statistics } = videoDetail;

	return (
		title && (
			<div className=" min-h-[95vh] ">
				<div className="flex flex-col md:flex-row gap-28 px-20">
					<div className=" flex-1">
						<div className=" w-full sticky top-[86px]">
							<ReactPlayer
								url={`https://www.youtube.com/watch?v=${id}`}
								className="react-player border-[3px] border-[#4d4d4d] py-2 px-2.5 rounded-3xl"
								controls
							/>

							<div className="text-white text-lg md:text-2xl font-semibold px-5 pt-6 pb-4">
								{/* {videoDetail?.snippet?.title} */}
								{title}
							</div>
							<div className="flex justify-between text-white pl-4  pr-5">
								<Link
									className="flex gap-2 border justify-center items-center px-3 py-2 rounded-lg "
									to={`/channel/${channelId}`}
								>
									<div className="text-white text-sm md:text-lg">
										{channelTitle}
									</div>
									<img
										src={CheckCircleIcon}
										alt="verifiedChannelIcon"
										className="w-4 mt-0.5"
									/>
								</Link>
								<div className="flex gap-10 items-center">
									<h4 className="text-white text-sm md:text-base opacity-70 border py-2 px-3 rounded-lg">
										{parseInt(viewCount).toLocaleString()} Views
									</h4>
									<h4 className="text-white text-sm md:text-base opacity-70 border py-2 px-3 rounded-lg">
										{parseInt(likeCount).toLocaleString()} Likes
									</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="px-2 py-5 md:py-1 flex items-center justify-center">
						<Videos videos={videos} direction="column" />
					</div>
				</div>
			</div>
		)
	);
};

export default VideoDetail;
