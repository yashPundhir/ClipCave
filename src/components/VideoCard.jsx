import { Link } from "react-router-dom";

import CheckCircleIcon from "../assets/checkcircle.svg";

import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelUrl,
	demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<div className="w-full sm:w-[358px] md:w-[320px] border-2 border-[#4d4d4d] rounded-md sm:rounded-2xl min-h-[355px] bg-[#1e1e1e]">
			<Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
				<img
					src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
					alt={snippet?.title}
					className="h-[200px] rounded-t-md sm:rounded-t-2xl object-cover    w-full sm:w-[358px] px-5 border border-[#4d4d4d] bg-black"
				/>
			</Link>
			<div className="p-4 h-auto ">
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<h3 className="text-white text-xl font-bold">
						{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}{" "}
					</h3>
				</Link>
				<Link
					to={
						snippet?.channelId
							? `/channel/${snippet?.channelId}`
							: demoChannelUrl
					}
				>
					<div className="text-gray-500 text-base mt-3 flex gap-2">
						<h4 className=" capitalize">
							{snippet?.channelTitle || demoChannelTitle}
						</h4>
						<img src={CheckCircleIcon} className="w-5 mt-0.5" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default VideoCard;
