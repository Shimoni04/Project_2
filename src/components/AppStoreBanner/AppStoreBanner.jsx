// eslint-disable-next-line no-unused-vars
import React from "react";
import BoardImg from "../../assets/board.png";
import PlayStoreImg from "../../assets/play_store.png";
import AppStoreImg from "../../assets/app_store.png";

const bannerImg = {
	backgroundImage: `url(${BoardImg})`,
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "100%",
	width: "100%",
};
const AppStoreBanner = () => {
	return (
		<div
			className="bg-gray-200 dark:bg-gray-500 text-white py-10"
			style={bannerImg}>
			<div className="container">
				<div className="space-y-6 max-w-xl mx-auto">
					<h1
						data-aos="slide-up"
						className="text-2xl text-center sm:text-4xl font-semibold">
						Read books at your fingertips
					</h1>
					{/* Download options */}
					<div
						data-aos="slide-up"
						className="flex flex-wrap justify-center items-center gap-4">
						{/* Android */}
						<a href="#">
							<img
								src={PlayStoreImg}
								alt=""
								className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
							/>
						</a>
						{/* Apple */}
						<a href="#">
							<img
								src={AppStoreImg}
								alt=""
								className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppStoreBanner;
