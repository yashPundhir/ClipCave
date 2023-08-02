import React from "react";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
	if (!videos?.length) {
		return (
			<div className="text-[30px] px-7  text-white font-semibold">
				Loading...
			</div>
		);
	}

	return (
		<div
			className="flex flex-wrap justify-start gap-7 md:gap-12"
			style={{
				flexDirection: direction ? "column" : "row",
			}}
		>
			{videos.map((item, index) => (
				<div key={index}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard channelDetail={item} />}
				</div>
			))}
		</div>
	);
};

export default Videos;
