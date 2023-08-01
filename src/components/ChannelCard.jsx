import { Link } from "react-router-dom";

import CheckCircleIcon from "../assets/checkcircle.svg";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
	return (
		<div
			className="rounded-[20px] border-2 border-[#4d4d4d] bg-[#1e1e1e] flex justify-center items-center h-auto min-h-[355px] w-[356px] md:w-[320px]"
			style={{
				marginTop: marginTop,
			}}
		>
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<div className="flex flex-col justify-center items-center text-center text-white">
					<img
						src={
							channelDetail?.snippet?.thumbnails?.high?.url ||
							demoProfilePicture
						}
						alt={channelDetail?.snippet?.title}
						className="rounded-full h-[180px] w-[180px] mb-5 border-2 border-[#e3e3e3]"
					/>
					<div className="flex gap-1.5 text-lg justify-center">
						<h4 className="text-xl font-semibold">
							{channelDetail?.snippet?.title}
						</h4>
						<img src={CheckCircleIcon} className="w-5 mt-1" />
					</div>
					{channelDetail?.statistics?.subscriberCount && (
						<div className="mt-2 flex justify-center ">
							{parseInt(
								channelDetail?.statistics?.subscriberCount
							).toLocaleString()}{" "}
							Subscribers
							<img src={CheckCircleIcon} className=" invisible w-2 mt-1" />
						</div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default ChannelCard;
